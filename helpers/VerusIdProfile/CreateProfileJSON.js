// const InitialJSON = (profileVdxfid) => {
//   let object = {}
//   Object.keys(profileVdxfid.profile).forEach((element) => {
//     if (element !== 'public') {
//       object[element] = ''
//     }
//   })
//   return object
// }
//TODO: need to move code to helpers
// interface ObjectProps {
//   [key: string]: string | number | ObjectProps | []
// }
// const ObjectFinder = (key: string) => (obj: ObjectProps) => obj[key]
// TODO: need to see if can be converted to Typescript
const CreateProfileJSON = (initialJSON, profileVdxfid) => {
  const profileJSON = {}
  const remainingList = initialJSON
  //get profile info
  for (const [key, value] of Object.entries(profileVdxfid.profile)) {
    if (initialJSON[value.vdxfid]) {
      profileJSON[key] = initialJSON[value.vdxfid]
      delete remainingList[value.vdxfid]
    }
    // if (ObjectFinder(value.vdxfid)(initialJSON)) {
    //   profileJSON[`${key}`] = ObjectFinder(value.vdxfid)(initialJSON)
    //   const itemToRemove = ObjectFinder(value.vdxfid)(remainingList)
    //   delete remainingList[`${itemToRemove}`]
    // }
  }
  return { ...profileJSON, ...remainingList }
}

export default CreateProfileJSON
