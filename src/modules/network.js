const dofetch = async (url, options) => {
    const response = await fetch(url, options);
    await response.json();
};

export { dofetch };
