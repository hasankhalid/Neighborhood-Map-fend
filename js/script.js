//Locations taken from data request made using the google places API web request. The URL for the request is commented below
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=restuarants+in+DHA+Phase+8+Lahore&key=AIzaSyDqjxLgrX6yt_Hz-0GHwk1uSHM0WBrpqsQ
var locationList = [
      {
         "formatted_address" : "Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.5219454,
               "lng" : 74.4475168
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "79b66452bc2576ba14ea883d6359ea97f63c4fe2",
         "name" : "Outpost Byob Burgers",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 492,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/110047028518733209653/photos\"\u003eMuhammad Ali\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAABA2cbq1UzTdmVs_fGIcPfjyIJHX_whCOE8hP44Ns359YRc-YNcvMred-tB-vShu9kR4ZwEsDbBWkyoTvod87FqRIUO0LkFOQhc9qIdqnRYTb9R8E5ECQYj6Qx7uB7rKnuc6XzyNiCjkoiqT1ep8H2vwAmSEHzCJ6sc-vTgyZYr_EhBGHyytlFWU8sCsEfk_jwv3GhROORuRoeQMYm53K8pq67mDav7LlQ",
               "width" : 786
            }
         ],
         "place_id" : "ChIJH3cObwMPGTkR4JsLql5oJvU",
         "rating" : 4.2,
         "reference" : "CmRSAAAAxvGMXQz01I-fLzjITVOFw-nUlAsocpgenfxuteyjAatpzlwg0ZICnuKEmnm8rRcsxXRvtfYZ_FwhPVm5eNSrQAkk3oDM8scKyzeM18---JQ2VpvCvJ5TUMbxse_FaoibEhBwHTHU6jZSOUioL6BUdUDYGhRp569Da-yTKK-qX7Z8FcX5eTX4Zw",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.5200736,
               "lng" : 74.43887409999999
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "471da4fb67a1521ad1d9cd886577edf5b86bd692",
         "name" : "Voyage Cafe",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/114835831409248709666/photos\"\u003eRaza Hasan\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAKrndK3E-w153Pk_5Gzq8LqxpOwj8rPOiRlDa5FxJN5qAn1OashVzfStzEPXguUuU2_Z-nOgO1SLjjtE4lL4ASK4eaH09-BEOzQ0GOVsnDk1dT6zcl8QK7AdQVSn-8I7udeWiT0jsntKHAssIIk2BGwn439eCLmN_av_ldtPF0RnEhCCb36eZVPDaqYloIAEtW9MGhQ7qy7CzeCwrHaGJ2uDK52rh28-mQ",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJS-b3xA8PGTkRKom8tQvtCYA",
         "rating" : 3.9,
         "reference" : "CmRSAAAAZqATe2pz2XLam-1uc3H01rYVxgUHhLtla2EYEeEGxunfqyi2bom4iUZGvGi4Ja3oYaZrpk7-D1eCSCN4Gcltl62GtI3XV3XKZ7Cyp_SAB1PrUkrOQqsS4s6xF1xX6wkoEhCxTpVaXfSJB9UkYoBagmfyGhTIj0SRcTsTDtn3TufvkDqJmFdGxw",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Lahore - Bedian Rd, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.462583,
               "lng" : 74.43599399999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 31.4627057,
                  "lng" : 74.43613724999999
               },
               "southwest" : {
                  "lat" : 31.4625421,
                  "lng" : 74.43594625
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "a2b4621d1b57e5c4d473227a2b653db298714443",
         "name" : "Khyber Village",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 850,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/106548724242031414721/photos\"\u003eKhyber Village\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAP-JCDpbsIsl8_HZT9TcHy16EwVGGYiv2qAAppTUcAzPZL_yqOSLOJ2mgiFn3xxmPvauQBCcm7dXwViWLp0G5FBsbNV2di1K0H5g0H8vyiU6-6etydR3YL1pucYhYRwEtDBRPLdtpO0neaH9hGrDEyaMJ6u22pksez-xvnOCzMf_EhCUFfjPsA--LT9AUtxVzOogGhSCvhkMe6IoKuUf3IyEsg2jk05uqA",
               "width" : 850
            }
         ],
         "place_id" : "ChIJwbXH5ekIGTkR3eqaq-n_9Fo",
         "rating" : 3.9,
         "reference" : "CmRRAAAAV_oCNpv_MdMSZsMczpcToJmWxFCbSN_4w9DD7-DGTIj3tSLbWP-563GFc_RoDJIhOfhfRCZ4AyALurQLJ7i6WA8-pYzWp9-vlaVxVoj5_8jrJm9wq9sDvRJ6ozotUNipEhDh7P62o0FkkpgfmeRmr9J3GhReLgCAVJsBU-k8xn2PSb9wTIwAiA",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Lahore Ring Rd, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.5229148,
               "lng" : 74.42499959999999
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "5051c87eac3abaf80fc5612dad9663936023cfca",
         "name" : "Connexion Marquee",
         "place_id" : "ChIJg4zChnMPGTkRM3V3wvZ7_vg",
         "rating": null,
         "reference" : "CmRSAAAATh-QMA4JkNedCWrEi6NUp4rxKht82FC3cEi9kdPWLhRi_LMnwfdBdZGxDcLcVtI38Ec3Jl4HIWdlciKT_6eGFCLxhZlpOPRCVxzqfxkIETpXuCcbNOmXZ339KTjQ7qA0EhDaPR7j-LalWYK0qWc8WN7-GhRprq46kyVPKH9KGR72AOAKJ2AGQQ",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Park View Villas, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.5210825,
               "lng" : 74.424775
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "22c447bbe0ebe5cd2808a4159322b5b04b5d92d5",
         "name" : "Ministry Of Burgers",
         "photos" : [
            {
               "height" : 1680,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/104049777157697457593/photos\"\u003eMuhammad Burhan Ali\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAADaIMochRPZHWCuVExTuXHsMb4OQi6hYoA29xg8B5D4TMJOnX3K_lDcyzwU56_wmKJMO3kAhnGNAsSN7vD3EF35NC_6uxiPED8Sx0izpIR2PEixSc9_u8cWMgkgSBcdUzn_BjvkHh0LNdrlj_-yovoOby8AfqBW6RWdEM2ptyIS1EhDM5hnHY-wIMwj-ujiPG6UlGhT47so-d9tECYcY_uC_B9ZEX0410A",
               "width" : 6400
            }
         ],
         "place_id" : "ChIJse94uHMPGTkRKbWiugN19E8",
         "rating" : 3.7,
         "reference" : "CmRRAAAALbxWUXLzAmNeg3YUv-eFBM0PWz_ItFL0u9U837eYYu8KwZdr6qeFundX4YGscsWGoTdHNHocyXl1-SjcVcKRlDt_Rk-QwrkeQXizgiUXKlxSQZQbzwbLIGOmuu27LsHXEhDz22qxYr2PEWk4_7IdEwbCGhQDlqV6LC1uaQ1fB9i3PVFrTVvZMQ",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "DHA Phase 2، Lahore 54792, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.4712508,
               "lng" : 74.41043359999999
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "06c554e127936f5f4b07ce1e553ce4f8b4aae88c",
         "name" : "Subway",
         "place_id" : "ChIJx5oyp6gIGTkRL4GWaz6lWs8",
         "rating": null,
         "reference" : "CmRSAAAAm_LVkvGnp-cwRxEc2tKWZpMp-ZtdUuU7Mz1ACQPj3xP_OviPVDQk7-UBxW5omIOr_SBFu7mjoUpwyvLpyecYaE9GhMD6cGYkyXRkaMRpcFxr-MKYtUoZHYo-rIAdbfhvEhDI_Kcv8LpCAqs2wQCl8SPXGhSHtHoDIA8l581CGMPkO18NYYaAmA",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Barki Rd, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.5166161,
               "lng" : 74.45987269999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 31.51676715,
                  "lng" : 74.46002839999998
               },
               "southwest" : {
                  "lat" : 31.51616295000001,
                  "lng" : 74.45940559999998
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "23326622b070d96b8acc6dfcaf2428438f4bbd8a",
         "name" : "Chick & Chips",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "place_id" : "ChIJ10GpGOQOGTkRte9-JxfBHW4",
         "rating": null,
         "reference" : "CmRRAAAAdi6SqrJSe3McxSe92l3msKl5jCyN0dsqDIfr7zUG3kkDqF0howWeZodS2SASFaH01o1z5PJWAU0RVsQea5lU4hkz8gY1iz6pexGKmSIhvixuCHJ-jIABs-9gi0DIMW__EhBk_URms-F-gr7zy3IQdmBRGhSfxd5OT0ZLJHsUJTVZ6niGW8HeqQ",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Street 8, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.4757328,
               "lng" : 74.4021824
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 31.47578345000001,
                  "lng" : 74.40222684999999
               },
               "southwest" : {
                  "lat" : 31.47568404999999,
                  "lng" : 74.40213625000001
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "c9c01e41442254bc7b5ed6e60aa4b4b44475c2ae",
         "name" : "Bismillah Hotel and Naan Shop",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "place_id" : "ChIJ0weefQEGGTkR6hXZFeNP3_s",
         "rating": null,
         "reference" : "CmRSAAAA4d4KhkNsI3tAJlc4xtDXBupLuEuaAQYSr_cGu5dUuW8MjKzDWt8k_Cp36btLLIPV0CSpfJ8OJAZ8g1QRsPk4neyGo3_SmG--CG_5ZZFnSAfLy2ATdLOd_MGGyg_fgZ19EhDx9CpohaEZIBSSFdG3_pOIGhT1aQ1pwicuBnOMyzskjjFDOlc-mw",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Street 8, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.4627678,
               "lng" : 74.41426079999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 31.4628318,
                  "lng" : 74.4142755
               },
               "southwest" : {
                  "lat" : 31.4625758,
                  "lng" : 74.4142167
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "3f4e3f3aec59b7c42ab3a37ec15b770ea7ab5487",
         "name" : "City Cafe and Gril",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "place_id" : "ChIJWXb3VqIIGTkRMxg6TlYHPfI",
         "rating": null,
         "reference" : "CmRSAAAArfYLAQ_htJEyTzokHN3yeiiuYx2Cv8vCgCbwn88C5GN8eGH9wEVYOvQAtucshKEZGq-9zKDC9jz0VjsGEW3uC5owMzOCjqRx3-4kBHIx4tM8tYtpJEU-sthdBwIu49xTEhBWANY2XJy044J4IcDq68UgGhTe2Ic5rtk-69Se-Evs29ZlDephpQ",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "82 Sector H DHA phase 1 Lahore Cantt, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.4763095,
               "lng" : 74.4592973
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "68ce2362c0052c48cacb188b6300b71c243b62c8",
         "name" : "Italian Bites",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 324,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/107149674680194755862/photos\"\u003eubaid goreja\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAApxBQAaP_qqLndadRPi6uy_oD38xRjDGL3XZ84oKxrwf-yphBhb1KIjhN6Y3L2JZo-LO9mcwl0d-juRdNh_Nd8wA5uI4hzjBgaB_r2XbwOV4jkTIOukZBM5wMs4Sk-j_Iy8gVc4I9V-tqnyOkKgH0jrtV7JkV6R1RZSz1H-mSLeEhCR_3x1GbqQHkvIRj2Uz1e8GhTaSwex9yNuocfl-X_UAybvQWMqDA",
               "width" : 486
            }
         ],
         "place_id" : "ChIJjeUH7yUJGTkR3En-5_cJM5A",
         "rating": null,
         "reference" : "CmRSAAAAOcCB57LtU7C0xBJc3MNhWm4e0YG2M-q9Q-85u0dhfHbcq0QBWiK53UPpEbjhgIRQyAyED8YLluNNlp3D8c0rMcrSfoNSnftn7zOikaSxlan17rbgpD5QASXQTZYubdijEhDFcPa5CZnjCzILA_Mj_FFdGhQRz1bTDE2t6PGyjcphKSrKxWJz2Q",
         "types" : [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
         ]
      },
      {
         "formatted_address" : "Airport Road, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.5017857,
               "lng" : 74.4232981
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 31.50180055000001,
                  "lng" : 74.42357380000001
               },
               "southwest" : {
                  "lat" : 31.50174115,
                  "lng" : 74.4232062
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "ec790c7404d39c11e23a5d76c3541610df809f41",
         "name" : "Pizza Hut",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 4160,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/105735980882426982562/photos\"\u003eRJabdullah Fm\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAGZdDfT-WMYYTO16i355JEroJydG6e9goOHgBeFKJPBWxVwi0fUGeP0dIRdk0mBpg7rBOT0GdP0RWMxC-SHIG9wlPrTtht693dc3uyRN3CxkFaCj31zQ5KwWRnFNNDYpiPsOtsXISvtCuYxbWFYqsH7_U3Wkc-pY_dzw81laRAIhEhDHl2Szg_mo8LvL4qsqDAyNGhQphvqNRxGzVukWaQT-j2w7K0p-ug",
               "width" : 2336
            }
         ],
         "place_id" : "ChIJjWuEX0EPGTkRPzqFgv2A4o8",
         "price_level" : 1,
         "rating" : 3.8,
         "reference" : "CmRSAAAAYTcVNNNHrxaPAK-bG0iQH5hASf96glOa8cuQNWZTpYEkW2fA-6S6ZD9N7qzLVTYa0GWVF7Iril8rOIcnckw84Xw50Opq_S2zvCHUnWO6dveI8ZUgm4Mowg-QMb1cebXNEhDf4YkQ7GH6IYhjcElxIiQLGhRe2mxvVnIpi0zIBFM-twe129_akQ",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.4614525,
               "lng" : 74.4130746
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "6dba1f5f198109f4bb9eaecec4a17bdc38231b8f",
         "name" : "Dogar Restaurant",
         "place_id" : "ChIJRbM_a6IIGTkR5yW6-ErLyGU",
         "rating": null,
         "reference" : "CmRRAAAAgKz-XuWtCHvhELliGZU3caSek2gOyl_AYkGz1OjD94ZKZDkjAO0SllQg9s0NqDd4YGCRnqoD63-zH5OO2u-81gty4ZPO2WxKZzF7h7-Nyp40vZoKOtvohUQzLNG_3XEREhCsY1M79kXQMrdRMOYCLP-kGhT3DrUG2rY01ykzDQqBJ3eYFtGXRg",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      },
      {
         "formatted_address" : "Bedian Rd, Lahore, Pakistan",
         "geometry" : {
            "location" : {
               "lat" : 31.4635358,
               "lng" : 74.435194
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 31.4638166,
                  "lng" : 74.4358648
               },
               "southwest" : {
                  "lat" : 31.46269339999998,
                  "lng" : 74.43497039999998
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "72447218a98361331db8b4162e1b83dc24858a17",
         "name" : "Baithak Restaurant",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 640,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/103420498592235106564/photos\"\u003eImran Butt\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAPpY13-nw3OnqUgb9pAQLAcgV7ogetcDWpB0091s_hhPCFWrqlM-yxW_M9D_CGIEB1_PfN7Oxj3_PEKHICkcQ6Einm6c9Psurw4DbjbwDdeRaZ7a_4ucfw_qyZgqopsItY8qwd8vwmm1iuaDKhBuDxq34Yntjcx-UivDw_2YOUOTEhBbNI3HmgYNuVGVJdkO7n7uGhRObmq52K6iyONbSZYb6U9tWXiUHw",
               "width" : 960
            }
         ],
         "place_id" : "ChIJtxU__ekIGTkRL6WR4HdBEzI",
         "rating" : 4.1,
         "reference" : "CmRRAAAA0RcN1Lu020nLMDHXdr7NZKRD1_nNT3_cve8ezPyvgVXQchwQieIwdzS_duD2kwwR8J85tT5u78snv_dAaXQglpCVR8YADu2I9_D14Bo-zW7iH79sa7Jroj8hePLUKaBZEhBiEb0g4RU67PGb5QRRrM8GGhQ0A4oWIJDFcV8siaRBmAqvzACvMg",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
      }
];

var map;
//The map variable is created in the global slope so that it can be accessed through the viewModel and through the loc function.
var markersArray = [];
//This array will store map markers which will all be cleared later on using the clearOverlays function. This variable and function will be essential in the filteration of data!

var loc = function(data){
    var self = this; //Storing the value of this.
    var foursquareClientID = "QG2WLPBWJWCZUAACDEXLYAXOWPXRBN0DB0UGX4JHIFG4OEH1"; //The foursquare authentication IDs
    var foursquareClientSecret = "XWP3UXLMU2E0RZGGB3JA5C1YX1UOI22WSL3POJGNDJDPZGFB";
    var lati = data.geometry.location.lat;
    var longi = data.geometry.location.lng;

    this.formatted_address = ko.observable(data.formatted_address);
    this.lat = ko.observable(lati);
    this.lng = ko.observable(longi);
    this.name = ko.observable(data.name); //Each property is given a knockout observable value.
    this.rating = ko.observable(data.rating);
    this.marker = new google.maps.Marker({
         position: {lat: lati , lng: longi},
         title: data.name,
    });
    this.marker.setMap(map); //The setMap function is used to initialize the marker on the Map.
    this.phone = "";
    this.totalCheckins = "";
    this.show = ko.observable('');

    var searchURL = 'https://api.foursquare.com/v2/venues/search?ll=' + lati +',' + longi + '&client_id=' + foursquareClientID + '&client_secret=' + foursquareClientSecret + '&v=20170125';

    function createInfoWindow(phone, checkins){
      self.infowindow.setContent('<div><strong>' + data.name + '</strong> ' + data.formatted_address + '</div>'
      + '<div><strong> Description </strong>' + data.types[0] + '/' + data.types[1] + '</div>'
      + '<div><strong>FourSquare Data</strong></div><div><strong>Phone Number: </strong>' + phone
      + ', <strong>Total Check Ins: </strong>' + checkins + '</div>');
    }


    //The reason the infoWindow content is being set inside the getJSON function is that getJSON in JQuery is by default async. If it were outside of this function i would have to put async = false in
    //the ajax setup and that would be a major performance bottleneck for load time. As this functionality can load in the background, its better to keep it async
    $.getJSON(searchURL)
        .done(function(json) {
            self.phone = json.response.venues[0].contact.formattedPhone || "Not Available";
            self.totalCheckins = json.response.venues[0].stats.checkinsCount || "Not Available";
            self.category = json.response.venues[0].categories.name || "Not Available";

            createInfoWindow(self.phone, self.totalCheckins);
        })
        .fail(function() {
            createInfoWindow("Load Failed", "Load Failed");
        }); //Exception Handling in case the getJSON request fails

    self.infowindow = new google.maps.InfoWindow(); //Create an infoWindow for the location
     //Enter the data for the infoWindow

    this.marker.addListener("click", function() {
        self.infowindow.open(map, self.marker);
        self.marker.setAnimation(google.maps.Animation.BOUNCE); //Setting the animation, timeout and opening the info window based on a click event handler
        setTimeout(function() {
            self.marker.setAnimation(null); //The setTimeout function prevents the bounce from occuring infinte.
        }, 2800);
    });

    markersArray.push(this.marker); //Pushing this marker to the marker array so that it can be cleared later on
}

function clearOverlays() {
    for (var i = 0; i < markersArray.length; i++ ) {
        markersArray[i].setMap(null);
    }
    markersArray.length = 0;
}

//function clearOverlays taken from http://stackoverflow.com/questions/1544739/google-maps-api-v3-how-to-remove-all-markers as the v3 of google Maps does not offer such functionality.

var viewModel = function(){
    var self = this; //Taken from the course, using self to refer to this to avoid misuse of this within the function
    self.locations = ko.observableArray([]); //An observableArray of locations, will be populated from the JSON objects retrieved from the places API.
    self.query = ko.observable('');
    self.tempArray = ko.observableArray([]);
    self.tempArray2 = ko.observableArray([]);

    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 31.4940, lng: 74.4379}, zoom: 13
    }); //Map is created but does not get initalized until initMap is executed. initMap applies bindings to the viewModel

    console.log(self.locations.length);
    self.query = ko.observable('');
    self.originalList = ko.observableArray([]);
    self.originalList(self.locations.slice(0));
    /**supposed to empty the sidebar with the names as the function is hit and then repopulate it with items that match the keyboard input supplied by query.*/

    locationList.forEach(function(locationItem){
        self.locations.push(new loc(locationItem));   //This loop creates a loc item (corresponding to each JSON opject in the locationList) for the observableArray.
    });



    self.filterSearch = ko.computed(function(value) {
        self.tempArray().forEach(function(loc){
          loc.show = ko.observable(false);
        });

        if(self.query().length == 0){
           self.tempArray(self.locations.slice(0));
           self.tempArray().forEach(function(location){
               location.marker.setVisible(true);
               location.show = ko.observable(true);
           });
           return self.tempArray();
        }
        if (self.query().length > 0) {
            //clearOverlays(); //This function is used to clear the markers from the map. The function is taken from stackoverflow and attributed above.
            ko.utils.arrayFilter(self.tempArray(), function(location) {
                if (location.name().toLowerCase().indexOf(self.query().toLowerCase()) >= 0) {
                    location.marker.setVisible(true);
                    location.show = ko.observable(true);
                }
                else {
                    location.marker.setVisible(false);
                    location.show = ko.observable(false);
                }
            });
            self.tempArray2 = ko.observableArray([]);
            self.tempArray().forEach(function(loc){
              if(loc.show() == true){
                self.tempArray2().push(loc);
              }
              console.log(loc.name() + ' ' + loc.show());
            });
            return self.tempArray2();
        }
    }, self);

    self.doStuff = function(){
        var marker = this; //Store the variable this for later use
        this.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.marker.setAnimation(null); //Use marker to refer to this as this itself will return undefined in this context
        }, 2800);
        this.infowindow = new google.maps.InfoWindow();
        this.infowindow.setContent(document.getElementById('infoContent')); //Assign the info content id to the infoWindow
        this.infowindow.open(map, this.marker);
        self.locations.push(marker); //Readd the marker to the list so it does not get lost
    }

}



function initMap() {
    ko.applyBindings(new viewModel()); //Apply Bindings to the viewModel
}


//Called through the onerror property on the Google Maps load.
function exceptionHandle(){
    alert("Oops, it looks like you are looking for water and this is a desert. Google Map failed to load: Please try again later.");
}
