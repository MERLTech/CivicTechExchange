# S3 bucket and credentials for uploading files
#export AWS_ACCESS_KEY_ID=ASK
#export AWS_SECRET_ACCESS_KEY=ASK
#export S3_BUCKET=ASK

# Password for account used to send email
export EMAIL_HOST_PASSWORD=betterDemocracyViaTechnology

# Url prefix to generate links on the back-end
export PROTOCOL_DOMAIN=http://127.0.0.1:8000

# Email of the admin account, used to
export ADMIN_EMAIL=marlonakeating+1111@gmail.com

#Contact Us email address, used for Contact Form
export CONTACT_EMAIL=hello@democracylab.org

# Secret key used to encrypt session tokens
export DJANGO_SECRET_KEY="d!01@gn+%1ql1n(*)8xo+nx$$&n@mg$0_)9g+!(t-2vncaq!j8"

# Whether to show django debug info page on errors
export DJANGO_DEBUG=True

# Event Header
export HEADER_ALERT="<p>You are invited to our upcoming event, St. Hat-trick's day!  Come with a team or join a new one on Saturday, March 16.  Be sure to RSVP on <a href='https://www.eventbrite.com/e/st-hack-tricks-day-tickets-54897293282'>Eventbrite</a>!</p>"

# Sponsor information
export SPONSORS_METADATA='[{"displayName":"Amazon","url":"https://www.aboutamazon.com/our-communities/amazon-in-the-community","thumbnailUrl":"https://d1agxr2dqkgkuy.cloudfront.net/img/amazon_300_transparent.png","description":"At Amazon, we focus on building long-term and innovative programs that will have a lasting, positive impact in communities around the world.","category":"Sustaining"},{"displayName":"Microsoft","url":"https://www.microsoft.com/en-us/","thumbnailUrl":"https://d1agxr2dqkgkuy.cloudfront.net/img/microsoft_200_transparent.png","description":"We’re on a mission to empower every person and every organization on the planet to achieve more.","category":"Advancing"},{"displayName":"HERE Technologies","url":"https://www.here.com/","thumbnailUrl":"https://d1agxr2dqkgkuy.cloudfront.net/img/here_200_transparent.png","description":"By building a digital representation of reality entirely built upon location data, we are radically transforming the way the world lives, moves and interacts","category":"Advancing"}]'

# Configure project description example link
export PROJECT_DESCRIPTION_EXAMPLE_URL='https://www.democracylab.org/index/?section=AboutProject&id=1'

# Configure position description example link
export POSITION_DESCRIPTION_EXAMPLE_URL='https://docs.google.com/document/d/142NH4uRblJP6XvKdmW4GiFwoOmVWY6BJfEjGrlSP3Uk/edit'

# Configure exit survey url for volunteers concluding their commitment with a project
export VOLUNTEER_CONCLUDE_SURVEY_URL='https://docs.google.com/forms/d/e/1FAIpQLSd4e9FQYX3ARPg7qz1ct5qM_bQW_kkEvQaMuM5LV9Ma1NDgbA/viewform'

# Configure number of projects to display per server request
export PROJECTS_PER_PAGE=20

# Static asset CDN
export STATIC_CDN_URL='https://d1agxr2dqkgkuy.cloudfront.net'

# If True, emails won't be sent to their recipients, but to the ADMIN_EMAIL address (with metadata for debugging)
export FAKE_EMAILS=True

# This array specifies how many days we should space our reminder emails.  In this case, the first reminder comes after
# two days, the second after seven days, and none after that
export APPLICATION_REMINDER_PERIODS='[2,7,-1]'

# This array specifies how many days we should space our volunteer renewal reminder emails.  In this case, the first
# reminder comes two weeks before the volunteer's end date, and the second comes one week before
export VOLUNTEER_RENEW_REMINDER_PERIODS='[7,7,-1]'

# Sample email account configuration
# export EMAIL_SUPPORT_ACCT='{"host":"smtp.gmail.com","port":"587","display_name":"DemocracyLab Support","username":"support@democracylab.org","password":"SECRET","use_tls":"True","use_ssl":"False"}'
# export EMAIL_VOLUNTEER_ACCT='{"host":"smtp.gmail.com","port":"587","display_name":"DemocracyLab Volunteering","username":"volunteer@democracylab.org","password":"SECRET","use_tls":"True","use_ssl":"False"}'

export S3_BUCKET=democracylab-marlok
export EMAIL_HOST_PASSWORD=betterDemocracyViaTechnology

# ONLY FOR USE IN PRODUCTION
#export HOTJAR_APPLICATION_ID=1097784

#export GOOGLE_PROPERTY_ID='UA-2879129-5'
#export GOOGLE_ADS_ID='AW-736663510'
#export GOOGLE_TAGS_ID='GTM-MBD5H4V'
#export GOOGLE_CONVERSION_IDS='[{'SignedUp':'bYM2CLDDlqMBENavot8C'}]'

# DemocracyLab project ID (for use on About Us page)
export DLAB_PROJECT_ID=4

# Paypal endpoint (sandbox by default)
export PAYPAL_ENDPOINT='https://www.sandbox.paypal.com/cgi-bin/webscr'
# Paypal payee
export PAYPAL_PAYEE='mark@democracylab.org'

# Press page links (TODO: convert to db entries)
export PRESS_LINKS='[{"date":"March 11, 2019","href":"https://www.washingtontechnology.org/the-pulse-of-tech-for-good-in-seattle/","title":"The Pulse of Tech for Good in Seattle","source":"Washington Technology Industry Association"},{"date":"February 10, 2019","href":"https://www.esal.us/blog/democracylab-empowering-the-civic-tech-movement/","title":"DemocracyLab: Empowering the Civic Tech Movement","source":"Engineers and Scientists Acting Locally"},{"date":"January 22, 2019","href":"https://givingcompass.org/article/untapped-potential-of-civic-technology/","title":"The Untapped Potential of Civic Technology","source":"Giving Compass"},{"date":"January 18, 2019","href":"http://techtalk.seattle.gov/2019/01/18/civic-tech-community-tackles-pressing-issues-with-seattles-open-data/","title":"Civic Tech Community Tackles Pressing Issues with Seattle’s Open Data","source":"Seattle IT Tech Talk Blog"},{"date":"January 9, 2019","href":"https://socrata.com/blog/seattle-hackathon-real-world-impact/","title":"Seattle Hackathon Innovates for ‘Real World Impact’","source":"Socrata Blog"},{"date":"August 8, 2018","href":"https://www.geekwire.com/2018/can-tech-government-innovate-together-social-good-inside-new-effort-change-tide/","title":"Can tech and government innovate together for social good? Inside a new effort to change the tide","source":"GeekWire"}]'

# Google ReCaptcha development (NON PRODUCTION) keys
# These should always result in no captcha and always succeeding the check
export GOOGLE_RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
export GOOGLE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI

# Sample OAuth configuration
# export SOCIAL_APPS='{"github": {"id": 1, "name": "DLab Social Login", "client_id": "CONFIGURE", "secret": "CONFIGURE", "public": True}, "google": {"id": 2,"name": "DLab Social Login","client_id": "CONFIGURE","secret": "CONFIGURE", "public": True}, "linkedin": {"id": 3,"name": "DLab Social Login","client_id": "CONFIGURE","secret": "CONFIGURE", "public": True}, "facebook": {"id": 4,"name": "DLab Social Login","client_id": "CONFIGURE","secret": "CONFIGURE", "public": True}}'

# GitHub token for expanding our rate limit for API calls
# export GITHUB_API_TOKEN=SECRET

# The date the DemocracyLab site was last updated.  Used in our sitemap
export DL_PAGES_LAST_UPDATED='2019-12-05'
