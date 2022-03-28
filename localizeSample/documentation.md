<h1> How to implement Angular localize to a new project</h1>

<h3> Add angular@localize</h3>

```
ng add @angular/localize
```
Add i18n to your the Html element
```
<h1 i18n>this is English Test</h1>
```

<h3> Generate xlf files</h3>

In package.json you can add this script
```
"extract": "ng xi18n --output-path=src/translation"

```
Run the script :
```
npm run extract
```

Copy and paste the messages.xlf file, rename it to messages.< language of choice >.xlf (change the language of choice without the tags)


<h3> Now let´s configure the angular.json to include all langugages </h3>

```
{
  "projects": {
    "ponyracer": {
      "projectType": "application",
      // ...
      "i18n": {
        "locales": {
          "de": "src/locale/messages.de.xlf",
          "en": "src/locale/messages.en.xlf",
        }
      },
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          // ...
          "configurations": {
            "production": {
              // ...
            },
            "en": {
              "localize": ["en"]
            },
            "de": {
              "localize": ["de"]
            }
          }
        },
        "serve": {
          // ...
          "configurations": {
            "production": {
              // ...
            },
            "en": {
              "browserTarget": "localizeSample:build:en"
            },
            "de": {
              "browserTarget": "localizeSample:build:de"
            }
          }
        }
        // ...
}

```

to run the Application in german use :

```
ng serve --configuration=de
```

to run the Application in english use:
```
ng serve --configuration=en
```

