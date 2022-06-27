// interface MyInterface {
//   "userId": number,
//   "id": number,
//   "title": string,
//   "info": {
//     "desc": string,
//     "isActive": boolean
//   },
//   "tags": [
//     {
//       "name": string,
//       "value": number
//     }
//   ]
// }

// const obj: MyInterface = {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "info": {
//     "desc": "delectus aut autem",
//     "isActive": true
//   },
//   "tags": [
//     {
//       "name": "my name",
//       "value": 1000
//     }
//   ]
// }

interface Info {
  desc: string,
  isActive: boolean
}

interface Tag {
  name: string,
  value: number
}

interface Reply {
  "userId": number,
  "id": number,
  "title": string,
  "info": Info,
  "tags": Tag[]
}
