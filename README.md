# 🌍 AWS Static Website Hosting (Secure & Global)

This project demonstrates how to host a secure, fast, and serverless static website using AWS.

## 🚀 Live Site
🔗 [Visit on CloudFront](https://d8qt4ze7u5f8h.cloudfront.net/)

## ✅ Tech Stack
- Amazon S3 (Secure file hosting) 
- AWS CloudFront (CDN + HTTPS)
- Origin Access Control (OAC)
- CloudWatch + S3 Logs
- IAM policies and permissions
- 100% AWS Free Tier

## 📊 Logging & Monitoring
- CloudFront access logs enabled to S3
- View traffic, status codes, and patterns using W3C format logs

## 📁 How to Deploy Yourself
1. Create S3 bucket, upload files
2. Set bucket to private, enable OAC
3. Create CloudFront distribution with OAC
4. Enable logging to S3
5. (Optional) Use ACM & custom domain

## 💡 Why I Built This
To demonstrate real-world cloud deployment with security best practices and AWS observability — all in the AWS Free Tier.
