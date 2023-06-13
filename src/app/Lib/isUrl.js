const isURL = (input) => {
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/;
    return urlPattern.test(input);
}
export default isURL;