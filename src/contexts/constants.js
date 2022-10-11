export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:2109/api/v1'
        : 'https://vit-api-server.herokuapp.com/api/v1';
