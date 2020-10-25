# clams-ml
The Clams modeling language. A package that contains the clams data model for modleing and exchanging of cloud applications. 


# Build 

```shell
npm run build
```

# Test

```shell
npm run test
```

# Include Clams to own Project

Include into your package.json the following dependency
```json
"dependencies": {
    ""@openclams/clams-ml": "^1.5.7",
}
```

Add `.npmrc` file to project root with following content:
```
registry=https://npm.pkg.github.com/openclams
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_AUTH_TOKEN
```
to generate `YOUR_PERSONAL_AUTH_TOKEN`, visit [GitHub Settings](https://github.com/settings/tokens) and select the `read:packages` scope.
After copy and pasting the token, you should be able to install the package via `npm install`



