# Image shennanigans

The place where your images go to be nuked.

Implemented 3 different solutions
1. on the `master` branch, is the straight forward solution, no libraries involved, local storage + useReducer ftw
2. on `state-controls` is a solution with `zustand` as the state management solution for image editing controls
3. last but not least, `local-image-editing` is `state-controls` + using just CSS for manipulating the image. The image is then downloaded using `dom-to-image`
