# Test info

- Name: Accessibility Test >> Check Accessibility on spesific rule
- Location: /Users/james_surya/Documents/playwright-training/tests/api/spec/accessibility.spec.ts:92:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 1271

- Array []
+ Array [
+   Object {
+     "description": "Ensure all page content is contained by landmarks",
+     "help": "All page content should be contained by landmarks",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/region?application=playwright",
+     "id": "region",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".index > div:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<a href=\"/\" class=\"router-link-exact-active router-link-active\" data-v-f9d7618c=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".router-link-exact-active.router-link-active[href=\"/\"]:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"menu-list d-none d-md-flex\" data-v-f9d7618c=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".menu-list",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-slide swiper-slide-duplicate swiper-slide-prev\" data-v-073c726e=\"\" data-swiper-slide-index=\"4\" style=\"width: 1280px; opacity: 0; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".swiper-slide-prev.swiper-slide-duplicate[data-swiper-slide-index=\"4\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-slide swiper-slide-active\" data-v-073c726e=\"\" data-swiper-slide-index=\"0\" style=\"width: 1280px; opacity: 1; transform: translate3d(-1280px, 0px, 0px); transition-duration: 0ms;\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".swiper-container-fade > .swiper-wrapper > .swiper-slide-active.swiper-slide[data-swiper-slide-index=\"0\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-slide swiper-slide-next\" data-v-073c726e=\"\" data-swiper-slide-index=\"1\" style=\"width: 1280px; opacity: 0; transform: translate3d(-2560px, 0px, 0px); transition-duration: 0ms;\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".swiper-container-fade > .swiper-wrapper > .swiper-slide-next.swiper-slide[data-swiper-slide-index=\"1\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-slide\" data-v-073c726e=\"\" data-swiper-slide-index=\"2\" style=\"width: 1280px; opacity: 0; transform: translate3d(-3840px, 0px, 0px); transition-duration: 0ms;\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".swiper-slide[data-swiper-slide-index=\"2\"][data-v-073c726e=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-slide\" data-v-073c726e=\"\" data-swiper-slide-index=\"3\" style=\"width: 1280px; opacity: 0; transform: translate3d(-5120px, 0px, 0px); transition-duration: 0ms;\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "div[data-swiper-slide-index=\"3\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-slide swiper-slide-duplicate-prev\" data-v-073c726e=\"\" data-swiper-slide-index=\"4\" style=\"width: 1280px; opacity: 0; transform: translate3d(-6400px, 0px, 0px); transition-duration: 0ms;\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".swiper-slide-duplicate-prev.swiper-slide[data-swiper-slide-index=\"4\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"sub-poa sub-poa-active\" data-v-073c726e=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".sub-poa",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEaUExURUdwTBYQDbSIYbSGYZR0XCkaFiQYFmFLM35fSq6EXhwRDy4gFW9RQH1fTbuQbCwcFYdoUr2QZ7iQc6uAU////w0HBBIKBxYNCxcLBwkFAyATDh0PCSYWEFpNR1E9MmBEMS0aFCAXFBoSD2VTR3FYQUMwJV5QSyYbF1xKPzEjHjglHW9VPiwgHEc0KlZCN1ZIRGhNOEw4LWBORWdZUj4rImlYTGRJNGJVTlo/MGtfVjQfFgUEAk9CPFJFQGpRPn5xaG5bT1hGPHRcRFc6KzksJ0o+OWxROjwxLEI1MFI1KXhrYkAiGXJgVHdkWnBlXUY5NDMoJE4wJGNOQUUpHksqIF5FOGVIOm1URIFmXI6Ce/Du7qylnsC7uNPQzc3baJsAAAAUdFJOUwC/b7/9cIAc/v7lVnW/6qCYf5+fOuOdOAAAFAVJREFUaN5slg93mloWxZ3XzKuZNatrzbyABCigYFVQBxUJkhZQUhoUbAD5k76+7/81Zh9IM30zc5OiFfndfffZ99z0ei/jH2/eXR36h8MhMg4HTbM1TTMMumqGqeFjwzzQiOii2f0+vmoahqFFnqPVde15ck0vWv/q3Ztf3vZ+Hm/fXF9f4SF60jQOwXZbBnVtRLZBdMxx0KI/0Q+H5HCwzUgzIi8EVSM6ZjFNs9aurq//+RP/l3fX/VYkPWp6W3X/9fGLPp5uSw+fah3dbuntVzT5oNH6ID6CdpJcE92rzcoEKO9fX/391ZTraygmI1rt+cenyXA4GrCDmaTWnXa6vtI1otMn9JDnhZ6XQ7tNC7BNG3Pk+X6h//qi/Pq6Dw+MDrCdjieTEUODZbhx7RmGTP5AOy2Brq902/RMk+he7VWy55mgy4e63ls8y3F/bT2HcqqfERFdy2ejpznot7e3NIOu1p32qL12dAN0EmNGINpE90CH515lloG6Ujg8zY7I+9+uD1EUyZjBkLVgLzLsYAj4Peg0ga56MtbV0V+0ey/0CG877blnOyamqqpyKQosHr+/Zf5C0vuRGRlEx+KXAsuysISkd3ROquUIM5uUH1T4YBAd3z6QdoN8h2bPK0E3K69czoYDFg/f3zO3b+G6HUV2BH3QvhcHg47e4Rn8CnlHlzu6RgVytCgyPPgemXYVQ7+Xy05bhNKaDUfMLXsP/ODX3hvDoS/JcMdwlOEAWWEGzIvvdGGtku6ZrXe0Rmh3DC/CM7JpY8Sk3bQd2yurSvoyH45u74cw9h7W9MPYkW2b6N4Yd0Ysothx6RfzCI7Z0glO1YcbjtF65UA9aae0mKFNrj/MJ/MhwGTN/d96cnG6xKGDe6ajzyYTYcALQzK+9YYGq2NtkenAC0onLhEVsqPboJe5hw3V0iX4MhwCzNzT6F3Jp9OpyC6hLGfWbD7nRYUXOfalsK37QgmNrXdRW0/QDZpPBl0mepv10Ib0xcNo9DRkbzvtt72rRHUurusWWXzSdX2mKLqoCBzHdKlEdbCniB529E57996R5Va77FR2FZa2XOrD0Zfzp8FwyHR0P02StEmTuLi4iujOFddSXF7gfphDwVXIAgSP9gXZbuI9/oOYyLJcZSVNIseyXC6F4cR/9oWHR67F945pQvwUPdFxdV4QRFdRRF4UhTY4pIDhs9CRw4qQMrY0uYDF2IBCvpnRGkoHdHnJjz4/Pz/vHz5NOnpCI0iCYFvni1xd6crYgvOKrvNsuydgD+sWcZjJIMIZWEL5ILqDCaoqdkoZ5rR0nTs+P/uJIj1wTEcPCL9V1TzPpCJvqmC6okKPFZZF+tvci+7pUoQofOVQOX9oxwdQnYEut3THWT0C7if6whJIVi9Qtzgstnk+3UuLRA3SMigXJ8Q0c7Gthh3dXZxOVHdKLnFDWgdKQXQ5c6i65LsTroKz7/uB5Fo8WdNT3AXgKo1t0uBO2W9SKT5dLic4z4KO+vLrIKmlcTHOqAIykZASObRf6SW9hGHmp1TCXNLFli6Kyj5J/eMxPeJf09RO/6qpLqfT5YRmRw0J1eU+JlT5NNmWElYQdnM4/6E7jhMTfbyXjk2+XIaWTqnpCZSSRbDdJMk2CLymlC9NU4UZtCtil0ucIl936ctIcmk8RpFDwMgM2cmWy9IpHdK+2vuf/SBsUiezXIG57Yk8TzFU+Ol6im/VHmT0S6IXriKwbR9jmMndDuN8d8a6g2DpnqgIsIkmWSXqctlpl3wUdZUhFcWl0OeDHsE5XBS9GEvj2D5UThzLeBJ0aH85opiv53OKn6OfqjnS5ZToh3t1u3TyNNjt1Om+pU8R9nURqzWcLSxL73FQLoAuCoqoW27V1FV2Cp04K06uMHg5AFlmBnpyPp+x+YIgTzBHvkWdpmUZfDofaUm1k2Xb5+c0vjhUPTxf6PCdA16YYAr8iFYeOpcT4oCVod3QbiU6O9/tkvRM5qjrrRoEWEF63ASgLz8e/eP5Du9W7nLn59lFbvw6BP106pExHD/kOXrlRH4J7RdkrtBdkf9xiLDMwwf4frfZbFT48WG9DdQk2K+nZSitPvv++bzDpll/WG6TJSrWNB4Kh02DRPLcAFSOH3EDvHypsDSSjnYD7W0fvmfY0fvNebfZ3E2ne3U9vbtbo5KrpbPKLH0D6RgJ7qqJLxWXU96GjrTDc24gTGA8C/nDwaRp+uSaq7guVoPEUyeePG42WP776X4/nS4heiktFqvVYrywFi2cIhXcqVu/qbJ4GVTxC50QWAA/YEf8HH8SrJuDg4q62PsiPxNnE/b28/ebm5tv38/vN7skUPcLSQJ8nI2Lwir0aQs/U12O590xATj2ELpLAWdgN8MpogCuoPAcw3JWfsFuzOKFJYpPynzGPt9049vvyEtAPSnHxkPbwxzW046SdDyivRzX0mLjN/GlwDYG3KKqDhgeiQGXnyvcYMAv0gonZBwvdMyJRH26eR3f/HwKNjrSS2dIU2CJ7COr69VYX/tpGaPZEx3OcDiGJi2dm8zwMtykTb+qZLc9RCimf9z8NL4nLZt6wrFT3NKPsH0tWbqyPaoxtnAco5Pobg8x5ObICsvwTzPM9MnHXsBdHWetMpkos483fx6/BwQ/vrLRAP1joqpraazr7va5ydEVLmgkqB3RRWx5ZG8+E9ETHnfrJscBDvh8Np/p+ua/6LD/J92t9ON6u59KY0vXLRUnU+4UGIArPeTRchEYZvQI6fxcfJ8cJUVR3LGOC3rD3c3/jG/PpNfvLEdkVAlHD+Cz2eJffrJeWvqJ2KLSG3HKWKc/AeZjUcCfM5yymyoiur4OKboys3Y3/2f88W/CrIY3Th2L8iM6MI8BBIwwGPEhPkbujGx10NrCqfICnd1oX7rt//8bey6TVrt6TeMmqpSEw/Xxuefe63n5Efbnz+c/m2Kqs5KPi5QylPVG6oYBZuoSUnFdexnHC94zTll8wK8uI57Isr8z80oPEU4LKRCBlloWfdsqpUKGElJeCD1w9lVU0pkeJMAg+EMP9G1dxi6L8/iXsW/4hP30NDwWMAVkcUtLSjEwee7GC69y3znYGk7r7nIwh+Tc8+s0XoKYY3M1NnGInz68tb6D/qfheJsA3iqzgSs1CMFYr7IqSFJHT0gaxB4XXTYid8bHvkMzc4F2sae9r4cPb69vn84n+FknB7WhK6nkEAozrxXMJU2dRhKIu5uLDg3Swc8ekc+XGKwE1KxWPPwNOuiBY0a1GNrWSNWqsAV6285VjkwEelEHPgaOXVQUkL1/GMmmyrIuxsBHuU7836IjufookmcRKiMReBgqwUxr9Ip2Ok+cpsQWMMz0UxTDxoIC6F1dTkVJ09X+kL6D/uFTZAcwHUqc6KRYyES4GKsp//dODX/00t2+v6GzrsapfzxGUdY9NpxcBm9o30H/tqiBKdbK0MgWkYegBrq3q9ark8Vwyb27Bx9ZENsesRdFV1wLyJNk76p30L9awaRkwkjThlKwljEljVys5ty5UOwofY+3DkxnfX8qir65niIYQQDVB++hf1hEuy5KLMaothVhGGIfi531unKHQxpYvgD6Jaj7G9BR9E91Tekcx8l7zHxVoaz0IiwF39IJQDQG6NpKVG2qffu8v8G7/Ck6ghm0xU1D6GDm8C7vICYPtJCETqfKWBtuizF0egBP90F/nMZgabvjiZrh02nqLlVArL2HLpQAOmfSGBsqRryHGz5eg8qXotodDmA7C5qiOV578EK1gKpHcAjYO3qfdKtyPwkVdBi2ITGzQdOXExySJIU0+6IYx+ttKlCVEf2xo2KQo835LfrXl2yyvI39RIbzDN432HD7wi6crXQi9mMzddMNHZDoMY70fQP4OUfhEr8LvKnHY1vNa+DbVusFhIiNki10xbb+HeA+Cnozge1yGYriCPSsjri/8/K3Y/9+RbuUCWa59v2V0HGoImSv//Amh8CRNn5TB0XUR9pPRNH3PVz1GMV79Dhvxf7100T7G3smuQ38PNR6Vkxsknylhzmzj9DjgEdZUIP6wN21CieMdrGIyIEv5zfMsW+oWeKZWKSe/dRXdp0loYvtXJkSg3HOoY0PJTq6bhm7CIV7x4WaAN/3KIOYen6J/g0DQUOhrxMzK59z3zMgyDCxORodLtysclBHJpSL4DAiErlixPbasJmIHdg9itTTr4oSpsRiaiLAt8zAzat0v9iqUsNWmTbR4DwS5ywYjrD0/bFG06DRFLhzO0VTcaQfxr9A//pC+QDuOnR2ixFG83xN9/NS8fYsCH3LJaF44gw9/pKhYNgsW2Ky3X2OqCI5TTVshnPzt14JnSp8FMTU4yVEJV15wu/o7CzuxJCdzairgyCK0ZDXY7msG3ogI1PbuonKEjUg+Pb/lfRE4D3xAjmWbaiUzpMq38+2WofzICiNsAbDUfnwtiOGkp71UTnGQYVhIbByLvUIMVPP87+l7/sLDO6OTvNBNmaLCo3ND161X2ZuzwO7OwEUiZNOnROGlNNwwhuGo4Idoz8IZr5WfESrpGMaZ3/27y83ulS40pGitYtot9oquyT7feIZXoXD8OrALWvXnJiBtgAujuJ0PQ+hhmMm/ODllS5Lag2Dg5/cZ4//3AoY0ImCJ9pJMBeUZ/huhVYuNVxjaCPSga6YrJLUI2aG4Xruaai4HochtElOg2SaJ2s88nKLPs3RHkbFHXu4nymFXiq5zEu7eu4fqdSGwFVIalftUsF8HWymH4a+33wdDoNdSL5dD6R5DiEH+TZzxllX4G+IlutPrZel5XaB0FPXSxbNEBs0RNFLRbTjVAcxYFzDE5jQC0x0sLDCJnQZ6aUpBlnfw1H4ZdcctxMdTlsmRXSmvLLGrutMFCfWDGfUaypQLeqUzdM0dzCrnYdHChzD+fNz1GDPUaSAj+V5HtoReBnPmttpoHWGDKDfjkKP50XnsHWdpl5q0WqYxSwL2qbF4heHFLn6hCcwnoPLG2F/jD4irkUavd0Iu97egw3rqD+dsUcMxJvYKXRkg5lnDX2hunnePAhpjcELjJy1JetJnCfQDvTj1GDkB3bXPHQYc+t6WSqXJm3XdXNtMKreJ97hRKFv6JdYgvQ1oUbRc2cWGqW2VlXOfJ7pMJzzn494DMPn9Ez3OdEDIRN8Vi+abtLdqtKS0VRK8JjWjz9Cj62Qy5q/ftSQs3s5RfJSIzbzxJsdgWMa0Mcino/Rw0P3UH+paWX4thri8bRUbPiBvm0z2li/lIwBB7yktMmdBDZasdYscuEgLHeVIx7hhkUByumZLsoy4OIb/2dztqa7dGnh2ndesEkGrXckmJJHwJLodOnaG8GvrRAYEgwywOq1qqrUOo+Q8fRMgYPurB6z7J8j/CPbnuc62aVoD0m0GzyI2bI002U2YBajEKFr14V+OaQurbU4afpxTszQGT1Dgx2dZUbA4zjqUeMvkEu556WLQvDiLhgUA7AO9NF+fsRDVZJA1yly1ctn2bZQP0WdJ2hj0qp1qIJF/wB8XQMW2GhdOYBz+sAJenG9eYERMrr5IXBCB7j8/HJ9eHioMT74B9Juulpsct4eBTJ05KXKwYFS3BDgXHK6It9+63n3+zZ6ARrxRVL427h1t6/60+e/Pn758q9su/fauwglmSHIe+9LH0GQsa0OOQYRbiGhBL3Xduv++onNHzsXk2yycl1HTYESgKzDTjPFMEv+9fx8+/etycoOrRAziZvm6/y61ipPAaidZuO8Hudkd78b/PmBB71iT5laweyzrplgdVvo89N/u7TC3rRhIJp+oJ2mVv0UnLoB4UjIS2SQIuioWFjXJQiijGEWJvX//5K9dwlbNbcKagXP57t37+wzL6AnO5MH+OYEB+UzeNsfdwgpwglse8TuMt0HEtFpvtfDfoSXC5tQ0KEGxrn1cgqVQM1ASGfQkp/g/+FpPj+z8Xg+tVkcG7s/FiCkKzb7Pc441aaKg6/Ens1S+AAjuszwwFsnyABsD5WxOHgjF17n3AiMR7tC6PmUL4HdNOfzaY0aoLXVNNtVeFh4x0+C7zWsyXc8IQBcRdHFfCgY5lCKD20nGeC3xWuRz2ebBZQPtXgM5Louy/o0RQVTgNeInNEWG3NrMEMWvNUUFTndqEjGxTlcRMSWXqhg1hqy51N8xKXV6uUwb5u2LctnYJ/b5VoPE/AGP5aTGBMZjl1w9xnoKaH/gnfoX0KSPRL/WM94MbuMNumPxeFTybZvXbMZ3TbLiQ6pwjoxoE6Cp8IM2l4Ftx9me985XRzfm05igu1IcuRJsYWMI/94TFFGL8dztmEbto8wmixlu5G/sBcfUWK71ukguHn77ely9S6q3W0N0P2IR39geyYw/CLt3AhRyPN2nTVdDwl1AnYge2g00VHOkE82uwmCu1+PAh6pPvWFMrwJGtoVKuSxs9tYRz5Ytizwbr2T7hHObTi4DRUpwIUlXC7AEzgpvefd8DLufKIuhO8vQBO3gtk+hTB5OiWhpDyKKXiXsTH+ZgtWOugskgg/DeQyYI2r5F5+MIFidVTsIwqHx877zQqaB6OtM47X6InQAR8XkFBUnZQS4E448F9KDHzk3KC7Nr+m0P7zeAho6lmFw0NlhQIyZOXEjcS+LpsFPeENvhThB1KGw7rry5X/4KN97LkyjOLUZ9myPeXFYuRSLIuChykS0VVFS2k8Xo2HOO/YiQFXvVX9hTKBhsng3Xch7ulCJIqvWJemeV6W49Fil2BVsp0AyRwd1sFK9P12g6hgO0twK7ItzGAEhlf/fdfi9u4b9koo1VC1Z2TK83g1spG1pIHAJ/RZh06nb7HBAHiKiCDDtBSjRNz48er6gv0HTkXOCmp2gbAAAAAASUVORK5CYII=\" class=\"video-btn\" data-v-bb40300c=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".video-btn",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"channel-btn google-btn\" data-v-bb40300c=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".app-store-button[data-v-bb40300c=\"\"][data-v-073c726e=\"\"]:nth-child(2) > .google-btn.channel-btn[data-v-bb40300c=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"channel-btn apple-btn\" data-v-bb40300c=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".app-store-button[data-v-bb40300c=\"\"][data-v-073c726e=\"\"]:nth-child(3) > .apple-btn.channel-btn[data-v-bb40300c=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active\" data-v-073c726e=\"\" data-swiper-slide-index=\"0\" style=\"width: 1280px; opacity: 0; transform: translate3d(-7680px, 0px, 0px); transition-duration: 0ms;\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".swiper-container-fade > .swiper-wrapper > .swiper-slide-duplicate-active.swiper-slide-duplicate[data-swiper-slide-index=\"0\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"six-th d-none d-md-block\" data-v-d21e1ac0=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(2) > .six-th.d-md-block.d-none",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/c60f7a984c7fb4555763.png\" class=\"text-title\" data-v-d21e1ac0=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(2) > .th6[data-v-d21e1ac0=\"\"] > .text-title[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"title\" data-v-d21e1ac0=\"\">
+             Connecting Bonds with PINDAR
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(2) > .th6[data-v-d21e1ac0=\"\"] > .title[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"text-th6\" data-v-d21e1ac0=\"\">
+             Time and distance often separate us, but Easycash is here to unite. Celebrate moments of togetherness in Ramadan with Easycash. 
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(2) > .th6[data-v-d21e1ac0=\"\"] > .text-th6[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"hastag\" data-v-d21e1ac0=\"\">
+             #BerkatPINDAR #SilaturahmiLancar #RamadanEasycash
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(2) > .th6[data-v-d21e1ac0=\"\"] > .hastag[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<picture data-v-d21e1ac0=\"\"><source srcset=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/eeb95d10495dbb31def3.webp\" type=\"image/webp\"> <img src=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/12e16a2d6a7f56d5962b.jpg\" class=\"ph\" data-v-d21e1ac0=\"\"></picture>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(2) > .th6[data-v-d21e1ac0=\"\"] > .video-wrap[data-v-d21e1ac0=\"\"] > picture[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA0MSA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4LjUxMzYgMTkuNzgxNkM0MS4zODYxIDIxLjQyODIgNDEuMzg2MSAyNS41NzE0IDM4LjUxMzYgMjcuMjE4TDYuNDE2NzYgNDUuNjE2N0MzLjU1OTYyIDQ3LjI1NDUgLTAuMDAwMzQ1NTczIDQ1LjE5MTggLTAuMDAwMzQ1NDI5IDQxLjg5ODVMLTAuMDAwMzQzODIxIDUuMTAxMDZDLTAuMDAwMzQzNjc3IDEuODA3NzkgMy41NTk2MiAtMC4yNTQ5MSA2LjQxNjc3IDEuMzgyODhMMzguNTEzNiAxOS43ODE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==\" class=\"play\" data-v-d21e1ac0=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(2) > .th6[data-v-d21e1ac0=\"\"] > .video-wrap[data-v-d21e1ac0=\"\"] > .play[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"beware-of-scams d-none d-md-block\" data-v-0399615d=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(3) > .beware-of-scams.d-md-block.d-none",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<picture data-v-0399615d=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(3) > .beware-of-scams-mb[data-v-0399615d=\"\"] > picture",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"title\" data-v-0399615d=\"\">
+             Beware of Scams
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(3) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .title[data-v-0399615d=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"text-th6\" data-v-0399615d=\"\">
+             Easycash recommends that you safeguard your data as best as possible. Never give the OTP code to anyone. When you want to repay, check the Virtual Account code carefully. Do not make a mistake!
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(3) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .text-th6[data-v-0399615d=\"\"]:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"text-th6\" data-v-0399615d=\"\">
+             BE CAREFUL. THIS TRANSACTION IS HIGH RISK. YOU MAY EXPERIENCE DAMAGE OR LOSE MONEY. DO NOT GET INTO DEBT IF YOU DO NOT HAVE THE ABILITY TO PAY. CONSIDER IT WISELY BEFORE TRANSACTION.
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(3) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .text-th6[data-v-0399615d=\"\"]:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<picture data-v-0399615d=\"\"><source srcset=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/ab4a816100eede125180.webp\" type=\"image/webp\"> <img src=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/bc3c6b59d3fff2ada67f.png\" class=\"ph\" data-v-0399615d=\"\"></picture>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(3) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .video-wrap[data-v-0399615d=\"\"] > picture",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA0MSA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4LjUxMzYgMTkuNzgxNkM0MS4zODYxIDIxLjQyODIgNDEuMzg2MSAyNS41NzE0IDM4LjUxMzYgMjcuMjE4TDYuNDE2NzYgNDUuNjE2N0MzLjU1OTYyIDQ3LjI1NDUgLTAuMDAwMzQ1NTczIDQ1LjE5MTggLTAuMDAwMzQ1NDI5IDQxLjg5ODVMLTAuMDAwMzQzODIxIDUuMTAxMDZDLTAuMDAwMzQzNjc3IDEuODA3NzkgMy41NTk2MiAtMC4yNTQ5MSA2LjQxNjc3IDEuMzgyODhMMzguNTEzNiAxOS43ODE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==\" class=\"play\" data-v-0399615d=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".d-md-block.d-none[data-v-6ca1dad3=\"\"]:nth-child(3) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .video-wrap[data-v-0399615d=\"\"] > .play[data-v-0399615d=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"six-th d-none d-md-block\" data-v-d21e1ac0=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(1) > .six-th.d-md-block.d-none",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/c60f7a984c7fb4555763.png\" class=\"text-title\" data-v-d21e1ac0=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(1) > .th6[data-v-d21e1ac0=\"\"] > .text-title[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"title\" data-v-d21e1ac0=\"\">
+             Connecting Bonds with PINDAR
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(1) > .th6[data-v-d21e1ac0=\"\"] > .title[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"text-th6\" data-v-d21e1ac0=\"\">
+             Time and distance often separate us, but Easycash is here to unite. Celebrate moments of togetherness in Ramadan with Easycash. 
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(1) > .th6[data-v-d21e1ac0=\"\"] > .text-th6[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"hastag\" data-v-d21e1ac0=\"\">
+             #BerkatPINDAR #SilaturahmiLancar #RamadanEasycash
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(1) > .th6[data-v-d21e1ac0=\"\"] > .hastag[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<picture data-v-d21e1ac0=\"\"><source srcset=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/eeb95d10495dbb31def3.webp\" type=\"image/webp\"> <img src=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/12e16a2d6a7f56d5962b.jpg\" class=\"ph\" data-v-d21e1ac0=\"\"></picture>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(1) > .th6[data-v-d21e1ac0=\"\"] > .video-wrap[data-v-d21e1ac0=\"\"] > picture[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA0MSA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4LjUxMzYgMTkuNzgxNkM0MS4zODYxIDIxLjQyODIgNDEuMzg2MSAyNS41NzE0IDM4LjUxMzYgMjcuMjE4TDYuNDE2NzYgNDUuNjE2N0MzLjU1OTYyIDQ3LjI1NDUgLTAuMDAwMzQ1NTczIDQ1LjE5MTggLTAuMDAwMzQ1NDI5IDQxLjg5ODVMLTAuMDAwMzQzODIxIDUuMTAxMDZDLTAuMDAwMzQzNjc3IDEuODA3NzkgMy41NTk2MiAtMC4yNTQ5MSA2LjQxNjc3IDEuMzgyODhMMzguNTEzNiAxOS43ODE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==\" class=\"play\" data-v-d21e1ac0=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(1) > .th6[data-v-d21e1ac0=\"\"] > .video-wrap[data-v-d21e1ac0=\"\"] > .play[data-v-d21e1ac0=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"beware-of-scams d-none d-md-block\" data-v-0399615d=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(2) > .beware-of-scams.d-md-block.d-none",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<picture data-v-0399615d=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(2) > .beware-of-scams-mb[data-v-0399615d=\"\"] > picture",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"title\" data-v-0399615d=\"\">
+             Beware of Scams
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(2) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .title[data-v-0399615d=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"text-th6\" data-v-0399615d=\"\">
+             Easycash recommends that you safeguard your data as best as possible. Never give the OTP code to anyone. When you want to repay, check the Virtual Account code carefully. Do not make a mistake!
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(2) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .text-th6[data-v-0399615d=\"\"]:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"text-th6\" data-v-0399615d=\"\">
+             BE CAREFUL. THIS TRANSACTION IS HIGH RISK. YOU MAY EXPERIENCE DAMAGE OR LOSE MONEY. DO NOT GET INTO DEBT IF YOU DO NOT HAVE THE ABILITY TO PAY. CONSIDER IT WISELY BEFORE TRANSACTION.
+         </div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(2) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .text-th6[data-v-0399615d=\"\"]:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<picture data-v-0399615d=\"\"><source srcset=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/ab4a816100eede125180.webp\" type=\"image/webp\"> <img src=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/bc3c6b59d3fff2ada67f.png\" class=\"ph\" data-v-0399615d=\"\"></picture>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(2) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .video-wrap[data-v-0399615d=\"\"] > picture",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA0MSA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4LjUxMzYgMTkuNzgxNkM0MS4zODYxIDIxLjQyODIgNDEuMzg2MSAyNS41NzE0IDM4LjUxMzYgMjcuMjE4TDYuNDE2NzYgNDUuNjE2N0MzLjU1OTYyIDQ3LjI1NDUgLTAuMDAwMzQ1NTczIDQ1LjE5MTggLTAuMDAwMzQ1NDI5IDQxLjg5ODVMLTAuMDAwMzQzODIxIDUuMTAxMDZDLTAuMDAwMzQzNjc3IDEuODA3NzkgMy41NTk2MiAtMC4yNTQ5MSA2LjQxNjc3IDEuMzgyODhMMzguNTEzNiAxOS43ODE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==\" class=\"play\" data-v-0399615d=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-show[data-v-6ca1dad3=\"\"][data-v-361f0537=\"\"]:nth-child(2) > .beware-of-scams-mb[data-v-0399615d=\"\"] > .video-wrap[data-v-0399615d=\"\"] > .play[data-v-0399615d=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"who-left\" data-v-361f0537=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".who-left",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"who-right\" data-v-361f0537=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".who-right",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"why\" data-v-7a8588fe=\"\" data-v-6ca1dad3=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".why",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-wrapper\" style=\"transform: translate3d(-1280px, 0px, 0px); transition-duration: 0ms;\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".home-user-pc > .swiper-container.swiper-container-initialized.swiper-container-horizontal > .swiper-wrapper",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"home-activity ec-container\" data-v-3a423828=\"\" data-v-6ca1dad3=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".home-activity",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"partners-wrap\" data-v-53dc9a2e=\"\" data-v-6ca1dad3=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".partners-wrap",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"customer-left\" data-v-9ba4bce6=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".customer-left",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<picture data-v-9ba4bce6=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".map-wrapper > picture:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"map-address\" data-v-9ba4bce6=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".map-address",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"channel-btn google-btn\" data-v-bb40300c=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".btn.app-store-button[data-v-bb40300c=\"\"]:nth-child(1) > .google-btn.channel-btn[data-v-bb40300c=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"channel-btn apple-w-btn\" data-v-bb40300c=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".apple-w-btn",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"contact-info\" data-v-9ba4bce6=\"\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".contact-info[data-v-9ba4bce6=\"\"]:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"contact-info\" data-v-9ba4bce6=\"\"><div class=\"ec-container\" data-v-9ba4bce6=\"\"><div class=\"copy-right\" data-v-9ba4bce6=\"\"><span data-v-9ba4bce6=\"\">Copyright © 2025 PT Indonesia Fintopia Technology. All rights reserved.</span></div></div></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".contact-info[data-v-9ba4bce6=\"\"]:nth-child(5)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<img src=\"https://indoi18n-web-cdn.easycash.id/cdn/easycash/static/9aec16b7c88615accf6a.png\" class=\"pendant\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".pendant",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "best-practice",
+     ],
+   },
+ ]
    at /Users/james_surya/Documents/playwright-training/tests/api/spec/accessibility.spec.ts:97:36
```

# Page snapshot

```yaml
- text: "Beware of Scams: Beware of irresponsible people claiming to be from Easycash! Easycash never asks you to transfer back loan funds via email or SMS for any reason."
- link "Click here for more safety tips!":
  - /url: /about/faq/bewareOfFraud
- img
- link:
  - /url: /
  - img
- text: TKB90:100,00%
- link "Home":
  - /url: /
- link "Borrow":
  - /url: /borrow
- link "Lend":
  - /url: /lend
- link "About Us":
  - /url: /about/us
- link "FAQ":
  - /url: /about/faq
- link "Blog":
  - /url: /blog
- text: EN
- img
- img
- img
- img
- img
- img
- text: Connecting Bonds with PINDAR Easycash is a leading Information Technology-Based Co-Funding Service Licensed and Supervised by The Financial Services Authority (OJK). We connect borrowers and lenders directly through an online platform.
- img
- img
- img
- img
- img
- button "Go to slide 1"
- button "Go to slide 2"
- button "Go to slide 3"
- button "Go to slide 4"
- button "Go to slide 5"
- img
- img
- img
- text: "Connecting Bonds with PINDAR Time and distance often separate us, but Easycash is here to unite. Celebrate moments of togetherness in Ramadan with Easycash. #BerkatPINDAR #SilaturahmiLancar #RamadanEasycash"
- img
- text: "Connecting Bonds with PINDAR Time and distance often separate us, but Easycash is here to unite. Celebrate moments of togetherness in Ramadan with Easycash. #BerkatPINDAR #SilaturahmiLancar #RamadanEasycash"
- img
- img
- img
- text: Beware of Scams Easycash recommends that you safeguard your data as best as possible. Never give the OTP code to anyone. When you want to repay, check the Virtual Account code carefully. Do not make a mistake! BE CAREFUL. THIS TRANSACTION IS HIGH RISK. YOU MAY EXPERIENCE DAMAGE OR LOSE MONEY. DO NOT GET INTO DEBT IF YOU DO NOT HAVE THE ABILITY TO PAY. CONSIDER IT WISELY BEFORE TRANSACTION. Check for more information!
- img
- img
- img
- text: Beware of Scams Easycash recommends that you safeguard your data as best as possible. Never give the OTP code to anyone. When you want to repay, check the Virtual Account code carefully. Do not make a mistake! BE CAREFUL. THIS TRANSACTION IS HIGH RISK. YOU MAY EXPERIENCE DAMAGE OR LOSE MONEY. DO NOT GET INTO DEBT IF YOU DO NOT HAVE THE ABILITY TO PAY. CONSIDER IT WISELY BEFORE TRANSACTION.
- img
- img
- img
- img
- img
- text: "Connecting Bonds with PINDAR Time and distance often separate us, but Easycash is here to unite. Celebrate moments of togetherness in Ramadan with Easycash. #BerkatPINDAR #SilaturahmiLancar #RamadanEasycash"
- img
- text: "Connecting Bonds with PINDAR Time and distance often separate us, but Easycash is here to unite. Celebrate moments of togetherness in Ramadan with Easycash. #BerkatPINDAR #SilaturahmiLancar #RamadanEasycash"
- img
- img
- img
- text: Beware of Scams Easycash recommends that you safeguard your data as best as possible. Never give the OTP code to anyone. When you want to repay, check the Virtual Account code carefully. Do not make a mistake! BE CAREFUL. THIS TRANSACTION IS HIGH RISK. YOU MAY EXPERIENCE DAMAGE OR LOSE MONEY. DO NOT GET INTO DEBT IF YOU DO NOT HAVE THE ABILITY TO PAY. CONSIDER IT WISELY BEFORE TRANSACTION. Check for more information!
- img
- img
- img
- text: Beware of Scams Easycash recommends that you safeguard your data as best as possible. Never give the OTP code to anyone. When you want to repay, check the Virtual Account code carefully. Do not make a mistake! BE CAREFUL. THIS TRANSACTION IS HIGH RISK. YOU MAY EXPERIENCE DAMAGE OR LOSE MONEY. DO NOT GET INTO DEBT IF YOU DO NOT HAVE THE ABILITY TO PAY. CONSIDER IT WISELY BEFORE TRANSACTION.
- img
- img
- text: Who Are We? As a leading Information Technology-Based Co-Funding Service Licensed and Supervised by OJK, we work hard to connect lenders and borrowers through Easycash and provide them with a great user experience. We also make our contribution to the development of Indonesia's digital economy. 8,199,961 Total Accumulated Borrowers Since Established 1,366,606 Number of Active Borrowers 6,495 Number of Active Lenders Rp 74.89 Trillion Total Accumulative Loans Since Established Rp 6.77 Trillion Total Outstanding Loans Why Choose Us?
- img
- text: Licensed and Supervised by OJK We have been licensed and supervised by The Financial Services Authority (OJK).
- img
- text: Member of AFPI We are a member of the AFPI (Indonesian Joint Funding Fintech Association).
- img
- text: AI Risk Control Our self-developed risk control system is based on artificial intelligence and big data.
- img
- text: Personalized Financial Services We provide users with personalized financial services based on an effective risk control system.
- img
- text: High Level Security and Low Risk The funds are deposited in an escrow account and the system complies with ISO certification. Our Services Loan Service SIMPLE Loan application in three steps. HIGH LIMIT A maximum loan amount can reach up to IDR 100 million. TRANSPARENT High transparency of fee. FAST Loan assessment within 3 minutes. LOW INTEREST A maximum interest rate of no more than 0.3%. More Lending Service HIGH RETURNS A maximum interest rate of 20%. INSURANCE Lendings are covered by insurance. SERVICE High-quality customer service. SAFETY Your funds are safe in an escrow account. INTELLIGENCE Advanced risk control system result in high-quality assets. More
- img
- img
- img
- img
- img
- text: User Testimonials
- img
- text: Ida Ayu Agung Mas Store Owner Thanks to Easycash, I can quickly get funds for my business. The loan application process is very easy and practical.
- img
- img
- img
- img
- img
- text: User Testimonials
- img
- text: Siti Wahyuni Farmer I've known Easycash since 2020. It helped me get a loan with affordable interest for my agricultural business.
- img
- img
- img
- img
- img
- text: User Testimonials
- img
- text: Putra Purba University Student Easycash helped me when I had to buy textbooks for college. My study keeps doing good, thanks to Easycash.
- img
- img
- img
- img
- img
- text: User Testimonials
- img
- text: Ida Ayu Agung Mas Store Owner Thanks to Easycash, I can quickly get funds for my business. The loan application process is very easy and practical.
- img
- img
- img
- img
- img
- text: User Testimonials
- img
- text: Siti Wahyuni Farmer I've known Easycash since 2020. It helped me get a loan with affordable interest for my agricultural business.
- button "Previous slide"
- button "Next slide"
- text: Activities More
- link "01 July 2025 Easycash Berpartisipasi Dalam \"Next Gen Fintech\" di Universitas Amikom Yogka":
  - /url: /blog/partisipasi-easycash-dalam-next-gen-fintech-di-universitas-amikom-yogyakarta
- link "01 July 2025 Program Literasi \"Easy Talk\" Berkolaborasi Dengan Radio Smart dan Gamasi Makassar":
  - /url: /blog/program-literasi-easy-talk-di-radio-makassar
- text: Partners Regulators Licensed and supervised by
- img
- text: Registered in
- img
- text: Registered in
- img
- text: Certified with
- img
- text: Members of
- img
- text: As Seen On
- img "easycashlogo"
- text: Contact Us Borrower
- img
- link "1500866":
  - /url: tel:1500866
- img
- link "cs.pinjaman@easycash.id":
  - /url: "mailto:cs.pinjaman@easycash.id "
- img
- text: Monday - Sunday 08:00 - 20:00
- img
- link "0811-41500866":
  - /url: https://api.whatsapp.com/send/?phone=6281141500866
- text: Lender
- img
- link "1500866":
  - /url: tel:1500866
- img
- link "cs.lender@easycash.id":
  - /url: mailto:cs.lender@easycash.id
- img
- text: Monday - Sunday 09:00 - 18:00
- img
- link "0811-41500866":
  - /url: https://api.whatsapp.com/send/?phone=6281141500866
- text: Follow us
- img "gmaplogo"
- text: "DEA TOWER 2 18-20 FLOOR MEGA KUNINGAN AREA JL. MEGA KUNINGAN BARAT KAV. E4 NO. 1-2, Desa/Kelurahan Kuningan Timur, Kec. Setiabudi, Kota Adm. Jakarta Selatan, Provinsi DKl Jakarta, Kode Pos: 12950"
- img
- img
- text: ATTENTION PT Indonesia Fintopia Technology provides peer-to-peer (P2P) lending platform service under the name “Easycash”. Easycash is licensed and supervised by The Financial Services Authority as an Information Technology-Based Co-Funding Service in accordance with the provisions in The Financial Services Authority Regulation No. 10/POJK.05/2022. Easycash’s Information Technology-Based Co-Funding Service (“Easycash Service”) is a civil agreement between the Lender and the Borrower, so that all forms of risk and legal consequences arising from it are fully borne by each party. Please ensure you understand the risks associated before you use Easycash Service. The Lender is fully responsible for all funding risks of late or default payments arising out of the use of Easycash Service. No national entity or authority is responsible for any such risks or provides compensation for the losses or other consequences arising in connection with this matter in any form. Easycash, with the approval of the respective Users (both Lender and Borrower), may access, acquire, store, administer and/or use the Users' personal data and information ("Data Utilization") on the Users' electronic devices (including smartphones or cellular phones), hardware, software, electronic documents, applications or electronic systems owned by the Users or controlled by the Users, by notifying the purpose, limitations and mechanisms of the data utilization to the Users concerned before obtaining such approval.
- list
- list
- list
- list
- list:
  - listitem: Lenders who do not have sufficient knowledge and experience in the Information Technology-Based Co-Funding Service are not advised to use this Easycash Service.
- list:
  - listitem: Borrowers should carefully consider the loan interest rate along with other costs in accordance with the ability to pay off the loan prior to using Easycash.
- list:
  - listitem: All fraudulent activities will be recorded digitally in cyberspace and may potentially be informed to the public through social media and can be used as legal evidence according to the prevailing laws on electronic information and transactions in the event of dispute resolution and law enforcement.
- list:
  - listitem: Users should read and understand this information before becoming a Lender or a Borrower on Easycash. The Users' decision to use Easycash Services proves that the Users fully understand this information.
- list:
  - listitem: The Financial Services Authority is not responsible for any violation or non-compliance by the User (either the Lender or the Borrower), whether due to the User's faults or negligence of the laws and regulations or agreements between Easycash and the Lender and/or the Borrower.
- text: Copyright © 2025 PT Indonesia Fintopia Technology. All rights reserved.
- img
```

# Test source

```ts
   1 | import test, { expect } from "playwright/test";
   2 | import { AxeBuilder } from '@axe-core/playwright';
   3 |
   4 | test.describe('Accessibility Test', () => {
   5 |     test.beforeEach(async ({ page }) => {
   6 |         await page.goto('https://easycash.id');
   7 |     })
   8 |
   9 |     test('Check Accessibility Entire Page', async ({ page }, testInfo) => {
   10 |         const results = await new AxeBuilder({ page }).analyze();
   11 |
   12 |          if (results.violations.length > 0) {
   13 |             console.log(`🔴 ${results.violations.length} accessibility violations found:`);
   14 |         
   15 |             results.violations.forEach((violation, index) => {
   16 |               console.log(`\n${index + 1}. ❌ ${violation.id} - ${violation.description}`);
   17 |               console.log(`   Help: ${violation.help}`);
   18 |               console.log(`   Impact: ${violation.impact}\n`);
   19 |         
   20 |               violation.nodes.forEach((node, i) => {
   21 |                 console.log(`   [Node ${i + 1}] Target: ${node.target.join(', ')}`);
   22 |                 console.log(`   Failure Summary: ${node.failureSummary}\n`);
   23 |               });
   24 |             });
   25 |           } else {
   26 |             console.log('✅ No accessibility violations found.');
   27 |           }
   28 |
   29 |           if (testInfo) {
   30 |             await testInfo.attach('accessibility-report', {
   31 |               body: JSON.stringify(results, null, 2),
   32 |               contentType: 'application/json',
   33 |             });
   34 |           }
   35 |
   36 |           const maximumError = 0;
   37 |
   38 |         const violationImpact = results.violations.filter(
   39 |             (v) => v.impact == status
   40 |         );
   41 |
   42 |         console.log(`🔍 Ditemukan ${violationImpact.length} pelanggaran ${status}.`);
   43 |
   44 |         if (violationImpact.length > maximumError) {
   45 |             violationImpact.forEach((violation, index) => {
   46 |                 console.log(`\n${index + 1}. ❌ ${violation.id} - ${violation.description}`);
   47 |                 console.log(`   Help: ${violation.help}`);
   48 |                 console.log(`   URL: ${violation.helpUrl}`);
   49 |             });
   50 |         }
   51 |
   52 |         expect(violationImpact.length).toBeLessThanOrEqual(maximumError);
   53 |     })
   54 |
   55 |     test('Check Accessibility on Element', async ({ page }) => {
   56 |         const results = await new AxeBuilder({ page })
   57 |         .include('.back-link')
   58 |         .analyze();
   59 |
   60 |         expect(results.violations).toEqual([]);
   61 |     })
   62 |
   63 |     test('Check Accessibility exclude Element', async ({ page }) => {
   64 |         const results = await new AxeBuilder({ page })
   65 |         .exclude('.back-link')
   66 |         .analyze();
   67 |
   68 |         expect(results.violations).toEqual([]);
   69 |     })
   70 |
   71 |     test('Check Accessibility with tags', async ({ page }) => {
   72 |         const results = await new AxeBuilder({ page })
   73 |         .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
   74 |         .analyze();
   75 |
   76 |         expect(results.violations).toEqual([]);
   77 |     })
   78 |
   79 |     test('Check Accessibility with disable rules', async ({ page }, testInfo) => {
   80 |         const results = await new AxeBuilder({ page })
   81 |         .disableRules(["landmark-one-main","page-has-heading-one","region"])
   82 |         .analyze();
   83 |
   84 |         expect(results.violations).toEqual([]);
   85 |
   86 |         await testInfo.attach('accessibility report', {
   87 |             body: JSON.stringify(results, null, 2),
   88 |             contentType: 'application/json',
   89 |         })
   90 |     })
   91 |
   92 |     test('Check Accessibility on spesific rule', async ({ page }) => {
   93 |         const results = await new AxeBuilder({ page })
   94 |         .withRules(["region"])
   95 |         .analyze();
   96 |
>  97 |         expect(results.violations).toEqual([]);
      |                                    ^ Error: expect(received).toEqual(expected) // deep equality
   98 |     })
   99 |     
  100 |     
  101 | })
```