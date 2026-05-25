# ES Battle Arena Security Checklist

## Authentication and Access
- [ ] Set strong `JWT_SECRET` and `OTP_SECRET` values (32+ random chars).
- [ ] Keep `REQUIRE_OTP_VERIFICATION=true` in production.
- [ ] Configure role-based route checks for all admin and manager APIs.
- [ ] Disable default or seeded credentials before go-live.

## OTP Delivery
- [ ] Configure SendGrid (`SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`).
- [ ] Configure Twilio (`TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER`).
- [ ] Verify OTP expiry (`OTP_EXPIRES_MINUTES`) and attempts (`OTP_MAX_ATTEMPTS`) meet policy.

## API and Network Security
- [ ] Keep `NODE_ENV=production` and `TRUST_PROXY=true` behind reverse proxy.
- [ ] Restrict CORS with exact production origins in `ALLOWED_ORIGINS`.
- [ ] Enable Pakistan-only traffic restriction (`PAKISTAN_ONLY=true`) when geo strategy is finalized.
- [ ] Keep rate limiting enabled and tune `RATE_LIMIT_MAX` for production load.

## Data and Input Safety
- [ ] Keep request sanitization middleware enabled.
- [ ] Validate all client input server-side with `express-validator`.
- [ ] Enforce Pakistani phone validation and country checks at register/update endpoints.

## File Upload Security
- [ ] Configure Cloudinary keys and use only HTTPS delivery URLs.
- [ ] Keep upload MIME filter image-only and file size limits.
- [ ] Reject executable or unsupported file extensions in any future upload routes.

## Operations and Monitoring
- [ ] Configure production logging sink (Datadog/ELK/CloudWatch).
- [ ] Add alerting for repeated failed login and OTP abuse patterns.
- [ ] Add automated backups for MongoDB and test restore process.
- [ ] Rotate secrets regularly and store them in a vault/secret manager.

## CI/CD Gates
- [ ] Run `npm run lint` and `npm run build` in CI.
- [ ] Add backend integration tests for auth, OTP, wallet, and booking.
- [ ] Add dependency vulnerability scanning and patch workflow.
