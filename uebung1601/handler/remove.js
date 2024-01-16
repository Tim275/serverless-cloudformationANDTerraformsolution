exports.removeHandler = async (event) => {
    // Implement your remove logic here
    return {
        statusCode: 200,
        body: JSON.stringify({from: "/remove"}),
    };
};