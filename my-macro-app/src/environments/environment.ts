// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:  {
    apiKey: 'AIzaSyALGKfLWf9DmdOlb8Uz0lFZAY8L9Wwt02s',
    authDomain: 'mymacrotracker.firebaseapp.com',
    databaseURL: 'https://mymacrotracker.firebaseio.com',
    projectId: "mymacrotracker",
    storageBucket: 'mymacrotracker.appspot.com',
    messagingSenderId: '732870010524'
 }
};
