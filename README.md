# carousel-commute-schools

# **READ - Read House Data**
Intention | Request Type | Request URL | Sample Request Body | Sample Resonse Body
------------ | ------------ | ------------ | ------------ | ------------ |
Get info about House by address | GET | /api/carousel/houses?address=123+Kings+Way&postal_code=30236 | NA | {house_id: 1, address: '123 Kings Way', address2: 'Apt 1', address3: '', address4: '', city_locality: 'Springfield', state_province: 'KY', postal_code: 30236, country: 'US', images: 12}
Get info about House by house_id | GET | /api/carousel/houses/1 | '' | ''
Get an array of image urls for a House | GET | /api/carousel/houses/1/images | '' | {house_id: 1, image_urls: [{image_id: 1, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house1img1.jpg'}, ..., {image_id: 12, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house1img12.jpg'}]}
Get a specific image URL | GET | /api/carousel/houses/1/images/1 | '' | {image_urls: ['http://abound-carousel-1.s3.amazonaws.com/house1img1.jpg']}

*Searches by address will be performed on the first matching address found in the database. To ensure you receive accurate information, it is advisable to include at least a street address and a postal code*

>Addresses in the sample responses below after the first entry are truncated.

*Response codes:*  
*success: 200*  
*failure: 404*  

## *Non-Read actions require an API key for authentication*
>(Request Header)  
>Authorization: 541703125017782fe2eeaf9fd03b7fc0a42fafb06f0608b58d5

# **CREATE - Add New House Data**
Intention | Request Type | Request URL | Sample Request Body | Sample Resonse Body
------------ | ------------ | ------------ | ------------ | ------------ |
Create a new House record | POST | /api/carousel/houses/ | {address: '313 Radiance Rd', ..., image_urls: ['https://i.imgur.com/EqjOtzC.jpg'] | {house_id: 12181104,  address: '313 Radiance Rd', images: 1}
Add images to a House record | POST | /api/carousel/houses/12181104/images | {image_urls: ['https://i.imgur.com/jXBJSDC.jpg']} | {house_id: 12181104, image_urls: [{image_id: 1, image_url: 'https://i.imgur.com/EqjOtzC.jpg'}, {image_id: 2, image_url:'https://i.imgur.com/jXBJSDC.jpg'}]}

*Response codes:*  
*success: 201*  
*unauthorized: 401*  

# **UPDATE - Edit House Data**
Intention | Request Type | Request URL | Sample Request Body | Sample Resonse Body
------------ | ------------ | ------------ | ------------ | ------------ |
Overwrite an existing House entry | PUT | /api/carousel/houses/12181104 | {address: '422 Bonds Ave', ... images: ['https://i.imgur.com/Sp5hGfv.jpg']} | {house_id: 12181104, address: '422 Bonds Ave', ..., images: 1}
Update an existing House entry | PATCH | /api/carousel/houses/12181104 | {address: '422 Smith Way'} | {house_id: 12181104, address: '422 Smith Way', ..., images: 1}
Update an existing House image entry | PATCH | /api/carousel/houses/12181104/images/1 | {image_url: 'http://abound-carousel-1.s3.amazonaws.com/house12181104img1.jpg'} | {image_id: 1, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house12181104img1.jpg'}


*Response codes:*  
*success: 200*  
*unauthorized: 401*

# **DELETE - Delete House Data**

Intention | Request Type | Request URL | Sample Request Body | Sample Resonse Body
------------ | ------------ | ------------ | ------------ | ------------ |
Delete a House entry | DELETE | /api/carousel/houses/1 | NA | NA
Delete a House image entry | DELETE | /api/carousel/houses/12181104/images/1 | NA | {house_id: 1, image_urls: [{image_id: 2, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house1img2.jpg'}, ..., {image_id: 12, image_url: 'http://abound-carousel-1.s3.amazonaws.com/house1img12.jpg'}]}

*Response codes:*  
*success: 200*  
*unauthorized: 401*  