# carousel-commute-schools

*Searches by address will be performed on the first matching address found in the database. To ensure you receive accurate information, it is advisable to include at least a street address and a ZIP code*

>Addresses in the sample responses below after the first entry are truncated.

# **READ - Read Related Houses Data**
Intention | Request Type | Request URL | Sample Request Body | Sample Resonse Body
----------------------------------------- | -------- | ------------------- | ---------------- | --------------------- |
Get info about related house by address | GET | /api/relatedHouses/ | {address: '123 Kings Way', ZIP: 30236} | {house_id: 1, list_price: '$250000', address: '123 Kings Way', address2: 'Apt 1', city: 'Springfield', state: 'KY', ZIP: 30236, images: 12}
Get info about related house by house_id | GET | /api/relatedHouses/1 | NA | ''
Get an array of image urls for a related house | GET | /api/relatedHouses/images | {address: '123 Kings Way', ZIP: 30236} | {house_id: 1, image_urls: [{image_id: 1, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house1img1.jpg'}, ..., {image_id: 12, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house1img12.jpg'}]}
'' | GET | /api/relatedHouses/1/images | NA | ''
Get a specific image URL | GET | /api/relatedHouses/images/1 | {address: '123 Kings Way', ZIP: 30236} | {image_urls: ['http://abound-carousel-1.s3.amazonaws.com/house1img1.jpg']}
'' | GET | /api/relatedHouses/1/images/1 | NA | ''

*Response codes:*  
*success: 200*  
*failure: 404*  

## *Non-Read actions require an API key for authentication*
>(Request Header)  
>Authorization: 541703125017782fe2eeaf9fd03b7fc0a42fafb06f0608b58d5

# **CREATE - Add New Related Houses Data**
Intention | Request Type | Request URL | Sample Request Body | Sample Resonse Body
- | - | - | - | - |
Create a new Related House record | POST | /api/relatedHouses/ | {list_price : '$249999', address: '313 Radiance Rd', ..., image_urls: ['https://i.imgur.com/EqjOtzC.jpg'] | {house_id: 12181104, list_price : '$249999', address: '313 Radiance Rd', images: 1}
Add a new image to a Related House record by address | POST | /api/relatedHouses/ | {address: '313 Radiance Rd' ZIP: 91387, image_urls: ['https://i.imgur.com/jXBJSDC.jpg']} | {house_id: 12181104, image_urls: [{image_id: 1, image_url: 'https://i.imgur.com/EqjOtzC.jpg'}, {image_id: 2, image_url:'https://i.imgur.com/jXBJSDC.jpg'}]}
Add a new image to a Related House record by house_id | POST | /api/relatedHouses/12181104 | {image_urls: ['https://i.imgur.com/jXBJSDC.jpg']} | ''

*Response codes:*  
*success: 201*  
*unauthorized: 401*  

# **UPDATE - Edit Related Houses Data**
Intention | Request Type | Request URL | Sample Request Body | Sample Resonse Body
- | - | - | - | - |
Overwrite an existing Related House entry | PUT | /api/relatedHouses/12181104 | {list_price : '$270001', address: '422 Bonds Ave', ... images: ['https://i.imgur.com/Sp5hGfv.jpg']} | {house_id: 12181104, list_price: '$270001', address: '422 Bonds Ave', ..., images: 1}
Update an existing Related House entry | PATCH | /api/relatedHouses/12181104 | {list_price: '$271000'} | {house_id: 12181104, list_price: '$271000', address: '422 Bonds Ave', ..., images: 1}
Update an existing Related House image entry | PATCH | /api/relatedHouses/12181104/1 | {image_url: 'http://abound-carousel-1.s3.amazonaws.com/house12181104img1.jpg'} | {image_id: 1, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house12181104img1.jpg'}


*Response codes:*  
*success: 200*  
*unauthorized: 401*

# **DELETE - Delete Related Houses Data**

Intention | Request Type | Request URL | Sample Request Body | Sample Resonse Body
----------------------------------------- | -------- | ------------------- | ---------------- | --------------------- |
Delete a Related House entry | DELETE | /api/relatedHouses/1 | NA | NA
Delete a Related House image entry | DELETE | /api/relatedHouses/12181104/images/1 | NA | {house_id: 1, image_urls: [{image_id: 2, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house1img2.jpg'}, ..., {image_id: 12, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house1img12.jpg'}]}

DELETE /api/relatedHouses/:house_id - delete record of house
DELETE /api/relatedHouses/:house_id/:image_id - delete an image

*Response codes:*  
*success: 200*  
*unauthorized: 401*  