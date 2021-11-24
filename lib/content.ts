
export function getContent(category, item){
    return "This is " + item + " in " + category;
}

export function getPaths(){
    return getNavigation().flatMap(category => {
        return category.cultures.map(item => {
            return {
                params: {
                    currency: category.currencyCode,
                    category: category.countryCode.replace(' ', '_'),
                    item: item.code.replace(' ', '_'),
                }
            }
        })
    })
}

export function getNavigation(){
    return [
        {
            name: "USA",
            store: "usa",
            countryCode: "us",
            currencyCode: "USD",
            cultures: [
                {
                    name: "English",
                    code: "en-us"
                },
                {
                    name: "Spanish",
                    code: "es-us"
                }
            ]
        },
        {
            name: "Germany",
            store: "ger",
            countryCode: "de",
            currencyCode: "EUR",
            cultures: [
                {
                    name: "German",
                    code: "de-de"
                },
                {
                    name: "English",
                    code: "en-de"
                }
            ]
        }
    ];
}