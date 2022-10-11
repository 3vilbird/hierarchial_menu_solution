const subjectJson = require("./subjectsjson.json");

// let parent = subjectJson.filter((x) => x.Pid == 0);
// parent.forEach((element) => console.log(JSON.stringify(element)));

// const searcher = (subjectJson, parentId) => {
//   return subjectJson.filter((x) => x.Pid == parentId);
// };

// let submenus = parent.map((data) => {
//   return searcher(subjectJson, data.id);
// });

// printing final result
//console.log(JSON.stringify(...submenus));

function myrecursion(arr, pid) {
  let data = [];
  let arrfilterdToplevelParent = arr.filter((x) => x.Pid == pid);
  if (arrfilterdToplevelParent.length == 0) {
    return [];
  }
  for (let i = 0; i < arrfilterdToplevelParent.length; i++) {
    //
    data = [...data, ...myrecursion(arr, arrfilterdToplevelParent[i]["id"])];
  }
  return [...arrfilterdToplevelParent, ...data];
}

let res = myrecursion(subjectJson, 0);

console.log(JSON.stringify(res, null, 2));
