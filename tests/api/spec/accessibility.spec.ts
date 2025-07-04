import test, { expect } from "playwright/test";
import { AxeBuilder } from '@axe-core/playwright';

test.describe('Accessibility Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://easycash.id');
    })

    test('Check Accessibility Entire Page', async ({ page }, testInfo) => {
        const results = await new AxeBuilder({ page }).analyze();

         if (results.violations.length > 0) {
            console.log(`🔴 ${results.violations.length} accessibility violations found:`);
        
            results.violations.forEach((violation, index) => {
              console.log(`\n${index + 1}. ❌ ${violation.id} - ${violation.description}`);
              console.log(`   Help: ${violation.help}`);
              console.log(`   Impact: ${violation.impact}\n`);
        
              violation.nodes.forEach((node, i) => {
                console.log(`   [Node ${i + 1}] Target: ${node.target.join(', ')}`);
                console.log(`   Failure Summary: ${node.failureSummary}\n`);
              });
            });
          } else {
            console.log('✅ No accessibility violations found.');
          }

          if (testInfo) {
            await testInfo.attach('accessibility-report', {
              body: JSON.stringify(results, null, 2),
              contentType: 'application/json',
            });
          }

          const maximumError = 0;

        const violationImpact = results.violations.filter(
            (v) => v.impact == status
        );

        console.log(`🔍 Ditemukan ${violationImpact.length} pelanggaran ${status}.`);

        if (violationImpact.length > maximumError) {
            violationImpact.forEach((violation, index) => {
                console.log(`\n${index + 1}. ❌ ${violation.id} - ${violation.description}`);
                console.log(`   Help: ${violation.help}`);
                console.log(`   URL: ${violation.helpUrl}`);
            });
        }

        expect(violationImpact.length).toBeLessThanOrEqual(maximumError);
    })

    test('Check Accessibility on Element', async ({ page }) => {
        const results = await new AxeBuilder({ page })
        .include('.back-link')
        .analyze();

        expect(results.violations).toEqual([]);
    })

    test('Check Accessibility exclude Element', async ({ page }) => {
        const results = await new AxeBuilder({ page })
        .exclude('.back-link')
        .analyze();

        expect(results.violations).toEqual([]);
    })

    test('Check Accessibility with tags', async ({ page }) => {
        const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

        expect(results.violations).toEqual([]);
    })

    test('Check Accessibility with disable rules', async ({ page }, testInfo) => {
        const results = await new AxeBuilder({ page })
        .disableRules(["landmark-one-main","page-has-heading-one","region"])
        .analyze();

        expect(results.violations).toEqual([]);

        await testInfo.attach('accessibility report', {
            body: JSON.stringify(results, null, 2),
            contentType: 'application/json',
        })
    })

    test('Check Accessibility on spesific rule', async ({ page }) => {
        const results = await new AxeBuilder({ page })
        .withRules(["region"])
        .analyze();

        expect(results.violations).toEqual([]);
    })
    
    
})