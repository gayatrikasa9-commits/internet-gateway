# Stellar Liquid Scape

A static Vite + React landing website with cinematic space visuals, video backgrounds, and Framer Motion animations.

## Requirements

- Node.js 20 or newer
- npm
- An AWS account, only needed for S3 hosting

## Run Locally

1. Clone the repository.

```bash
git clone <your-repository-url>
cd stellar-liquid-scape
```

2. Install dependencies.

```bash
npm install
```

3. Start the development server.

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

Usually it will be:

```text
http://localhost:8080/
```

## Create Production Build

Run:

```bash
npm run build
```

The static production files will be created in:

```text
dist/
```

The build output should look like this:

```text
dist/index.html
dist/assets/
```

For S3 hosting, upload the contents inside `dist/`, not the `dist` folder itself.

## Host On Amazon S3 Static Website Hosting

### 1. Build The Website

From the project folder:

```bash
npm install
npm run build
```

Confirm these files exist:

```text
dist/index.html
dist/assets/
```

### 2. Create An S3 Bucket

1. Open the AWS Console.
2. Go to **S3**.
3. Click **Create bucket**.
4. Enter a unique bucket name, for example:

```text
stellar-liquid-scape
```

5. Choose your AWS region.
6. In **Block Public Access settings**, uncheck **Block all public access**.
7. Confirm the public access warning.
8. Click **Create bucket**.

### 3. Enable Static Website Hosting

1. Open your S3 bucket.
2. Go to the **Properties** tab.
3. Scroll to **Static website hosting**.
4. Click **Edit**.
5. Select **Enable**.
6. Choose **Host a static website**.
7. Set **Index document** to:

```text
index.html
```

8. Set **Error document** to:

```text
index.html
```

9. Save changes.

Using `index.html` as the error document helps the React app still load if a route or refresh falls back to the app shell.

### 4. Add Bucket Policy

1. Go to the **Permissions** tab.
2. Open **Bucket policy**.
3. Add this policy.
4. Replace `YOUR_BUCKET_NAME` with your real bucket name.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForStaticWebsite",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

Example:

```json
"Resource": "arn:aws:s3:::stellar-liquid-scape/*"
```

Save the policy.

### 5. Upload The Website Files

Open this local folder:

```text
stellar-liquid-scape/dist
```

Select the files and folders inside it:

```text
index.html
assets/
```

Upload those directly into the S3 bucket root.

After upload, the bucket should show:

```text
index.html
assets/
```

It should not show:

```text
dist/index.html
dist/assets/
```

If you accidentally uploaded a `dist/` folder, delete it from S3 and upload the contents inside `dist/` again.

### 6. Open The Website

1. Go to the bucket **Properties** tab.
2. Scroll to **Static website hosting**.
3. Copy the **Bucket website endpoint**.

It will look like:

```text
http://YOUR_BUCKET_NAME.s3-website.REGION.amazonaws.com
```

Open that URL in your browser.

## Update The Website Later

After making code changes:

```bash
npm run build
```

Then upload the new contents of `dist/` to the S3 bucket root again.

If you use AWS CLI:

```bash
aws s3 sync dist/ s3://YOUR_BUCKET_NAME --delete
```

Replace `YOUR_BUCKET_NAME` with your actual bucket name.

## Useful Commands

```bash
npm install
```

Install dependencies.

```bash
npm run dev
```

Run locally for development.

```bash
npm run build
```

Create production files in `dist/`.

```bash
npm run preview
```

Preview the production build locally after running `npm run build`.
