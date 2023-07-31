export const getQueryString = <T extends Object>(object: T) => {
    const params = Object.keys(object).reduce((acc, curr) => {
        const key = curr as keyof T;
        return !!object[key]
            ? {
                  ...acc,
                  [curr]: object[key],
              }
            : acc;
    }, {});

    return new URLSearchParams(params).toString();
};
