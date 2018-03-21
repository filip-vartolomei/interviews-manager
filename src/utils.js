export const countryList = [
    'United Kingdom',
    'Netherland',
    'Italy',
    'Germany',
    'Belgium',
    'California',
    'Russia',
    'Romania'
];

export const languageList = [
    'English',
    'German',
];

export const interviewStatusList = [
    'None',
    'Introduced',
    'Interviewing',
    'Offer',
];

export const typeContractList = [
    'Permanent',
    'Contract (months)',
    'Freelance'
];

export const typeCurrencyList = [
    '£',
    '€',
    '$',
];

export const statusBarSize = (statusBar) => {
    let stat = {};
    statusBar = statusBar[0];
    switch (statusBar) {
        case interviewStatusList[0]: // None
            stat = {
                value: 1,
                className: 'progress'
            }
            break;
        case interviewStatusList[1]: // Introduced
            stat = {
                value: 30,
                className: 'is-info'
            }
            break;
        case interviewStatusList[2]: // Interviewing
            stat = {
                value: 70,
                className: 'is-warning'
            }
            break;
        case interviewStatusList[3]: // Offer
            stat = {
                value: 98,
                className: 'is-success'
            }
            break;
        default:
            break;
    }
    return stat;
}