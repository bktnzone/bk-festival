# BK Festival Blessing Cards

#### Technology Stack - Front End

- NextJS (React Server Side)
- Uses CSR via NextJS Build Export
- Tailwind CSS

#### Technology Stack - Backend End

- Uses Slogan API
- Slogan Card API is hosted on Google Sheets via Google Apps Script

#### Local Development Setup

1. Install the Dependencies

   ```
   npm install

   or

   yarn

   ```

2. Develop Locally

   ```
   npm run dev

   or

   yarn dev

   ```

#### Prepare for Deployment

```

- Export the final html and css files using npm run export
- The final files will be available in the _static folder
- Copy the files in the _static folder to the webserver. (Linux or IIS).
- You can also freely host on vercel platform


```
