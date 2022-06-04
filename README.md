
# HelloMemo API

This is the API for a Memo APP ( Nameless Chat ). 

Visit [NameLess Chat](https://nameless-chat.vercel.app/)



### Tech Used
1. **NodeJS** - JavaScript Engine
2. **ExpressJS** - For managing HTTP requests
3. **Mongoose** - For ODM library for MongoDB


### API Reference
Base Url - https://hello-memo-api.herokuapp.com/

#### Get all memos

```http
  GET /api/memos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `-----` | No parameters are required. |

#### Create a memo

```http
  POST /api/memos
```

_The Body should contain these parametes while sending a request._

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of the Memo |
| `details`      | `string` | **Required**. Message of the Memo |
| `category`      | `string` | **Required**. Category of the Memo |

