exports.saveHandler = async (event) => {
    // Implement your save logic here
    return {
        statusCode: 200,
        body: JSON.stringify({from: "/save"}),
    };
};