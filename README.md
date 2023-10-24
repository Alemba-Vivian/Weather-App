
# Weather App

A weather forecast site that uses Weather API.
It allows users to search for a specific location and a toggle displaying the data in Fahrenheit or Celsius


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET https://www.weatherapi.com/v1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`      | `string` | **Required**.  Query parameter based on which data is sent back.|

#### Location, search, notifications
Canada postal code e.g: q=G2J

returns the user query. e.g location, tempt


## Authors

- [@Alemba-Vivian](https://www.github.com/Alemba-Vivian)

