# Configuring a Shared Library via an NPM Package for Angular

## Creating a New Shared Library

1. Download the zip file for the shared library, and extract it to the appropriate location on your computer. The shared library should not be stored in the same repository as the application, so any folder not in the application folder is good. I recommend putting it in your root projects folder as a sibling to the application folder.

Suggested Folder Structure
`
- projects (root project folder)
    |- angular-app
    |- shared-lib
`

1. Rename the **shared-lib** folder to the desired package name. The name should have no spaces, only lowercase, and use dashes for spaces between words. These instructions will refer to the **shared-lib** folder, but replace that name with your custom folder name for all future steps.

For example, if the purpose of the shared library package is to provide utility services and components, it could be named **utility-common** or **utility-shared**.

1. In the **shared-lib** folder, delete the file **package-lock.json**, if present.

1. In the **shared-lib** folder, open the **package.json** file, and change the name option to the package name specified for the package folder. It's important these two names match to avoid development confusion.

1. Open a terminal window, change to the **shared-lib** folder. Run the following command:

```npm install```

1. Next, the shared package needs to linked to the application for the application to make use of it. From the terminal window, within the shared packaged folder, type the following:

```npm link```

This will link the package to the global packages.

Then, change to the application folder. Based upon the suggested folder structure above:

```cd ../angular-app```

Next, the **shared-lib** package needs to be linked into the Angular application:

```npm link angular-app```

This will link the global **shared-lib** package reference created in the previous step to the application.

> Note: if you are using a NPM 5, the **npm link** command must be repeated if any other packages are installed in the application after the linking of **shared-lib**.

1. With the linking complete, files can be edited in the **shared-lib** package, then built, and are available immediately in the application.

1. To edit files, open the **shared-lib** project with an editor (such as Visual Studio Code), and edit the code in the "src/ts" folder. In the folder, you will see examples of a component, pipe and service. For components, follow the pattern for including CSS and HTML files for the styles and template of the component, respectively.

1. To build the changes, run the following command from the root folder of the **shared-lib** package.

```npm run build```

This command will run the build process one-time. The processed files will be output to the **dist** folder in the root package folder. Do not modify the **dist** folder output directly as it is regenerated on each build.

1. To build the changes as source files are saved, run the following command from the root folder of the **shared-lib** package.

```npm run build:watch```

This command will not exit, and will watch for changes to the source files in the **src/ts** folder, and when the changes are saved, the build process will execute again.

1. In the **src/ts** folder, do not modify the file **tsconfig-aot.json**. Do modify the **index.ts** to include the Angular parts you add to the **shared-lib** package. Be sure to import the parts, and register them with Angular module for the **shared-lib** package. You may want to update the named of the Angular module to reflect to the package name.

1. Once your package is ready for use by other projects and/or other developers, publish the package to it's own repository.


## Publishing a Shared Library Package to GitHub

1. Create repository on GitHub.

1. Add a remote to the repository.

```git remote add origin <url to repo>```

1. Stage and commit the changed files. As part of the changes, be sure to increment the semver version of the shared package. The semver is comprised of three numbers:

major.minor.patch => 1.2.4

1 is the major version
2 is the minor version
3 is the patch version

If the change is a major breaking change, then increment the major version.
If the change is a minor change, new functionality and/or no breaking changes, then increment the minor version.
If the change is a bug fix with no new features and no breaking changes, then increment the patch version.

1.  After committing the changes, tag the commit with the semver value

```git tag 1.2.4 <commit hash>```

1. Then, push the commit and the tag to the repository.

```git push -u origin master --tags```


## Consuming a Shared Library from GitHub

1. To use it in other packages, do an NPM install from the Git repository.

For example, to pull a package from GitHub:

```npm install <github url>:semver:1.2.4```

Substitute version **1.2.4** with the desired version number. For more information: [NPM Install](https://docs.npmjs.com/cli/install)


## Modifying an Existing Shared Library from GitHub

1. Clone the repository of the shared library to your local machine.

1. If doing the modifications in conjunction with modifications to an application, then link the shared library package into the application. If the application is already referencing the shared library package from Github, uninstall it from the application, and then link the local copy.

1. Run the command to launch the build tool in watch mode on the shared library, and begin editing. The changes should be live in the application, allowing development of both the applcation and the shared library package at the same time.

1. When done editing the shared library package, increment the **package.json** semver version number, commit, tag and push the changes to the shared library to the git repository.

1. Unlink the shared library package from the application, and install it from the git repository with the new semver version into the application.

1. When done editing and testing the application, commit and push the changes to the application.

> Be sure to test the application from the version installed from Github to ensure all changes were committed and pushed as expected.
