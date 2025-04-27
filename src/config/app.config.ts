import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  environment: process.env.NODE_ENV || 'development',
  awsBucketName: process.env.AWS_BUCKET_NAME,
  awsRegion: process.env.AWS_REGION,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsCloudFrontUrl: process.env.AWS_CLOUDFRONT_URL,

  mailHost: process.env.MAIL_HOST,
  mailPort: process.env.MAIL_PORT,
  smtpUserName: process.env.MAIL_USER,
  smtpPassword: process.env.MAIL_PASS,
}));
