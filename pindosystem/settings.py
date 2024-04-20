

from pathlib import Path
import sys
import os
import environ


env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)

# reading .env file
environ.Env.read_env()


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

sys.path.insert(0, os.path.join(BASE_DIR, 'pindosystem/apps'))


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',
    "django.contrib.gis",
    'corsheaders',
    'login',
    'gispage',
    'empresas',
    'emsefor',
    'procedencias',
    'sagpyas',
    'maquinas',
    'configuration',
    'rodales',
    'rodales_gis',
    'gis_pindo',
    'plantaciones',
    'intervenciones',
    'planificacion',
    'api',
    'sap',
    'home'

]

AUTH_USER_MODEL = 'login.Users'

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware'
]

ALLOWED_HOSTS = ["localhost","192.168.36.220", "192.168.36.65", "0.0.0.0"]

"""CORS_ORIGIN_WHITELIST = (
    'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://192.168.36.220:5175'
)"""

CORS_ORIGIN_ALLOW_ALL = True




ROOT_URLCONF = 'pindosystem.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'pindosystem/templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.media',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'pindosystem.context_processors.global_data'
            ],
        },
    },
]

WSGI_APPLICATION = 'pindosystem.wsgi.application'


# Database django.contrib.gis.db.backends.postgis
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        #'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': env('POSTGRESQL_NAME'),
        'USER': env('POSTGRESQL_USER'),
        'PASSWORD': env('POSTGRESQL_PASS'),
        'HOST': env('POSTGRESQL_HOST'),
        'PORT': env('POSTGRESQL_PORT'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'America/Argentina/Buenos_Aires'
USE_L10N = True
USE_I18N = True

USE_DECIMAL_SEPARATOR = True
DECIMAL_SEPARATOR = ","
THOUSAND_SEPARATOR = "."
USE_THOUSAND_SEPARATOR = True



# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'),)
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')


MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

LOGIN_URL = 'login'



