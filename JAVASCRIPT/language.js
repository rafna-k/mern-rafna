const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 2005,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "RubyScript",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: false,
      creator: "Yukihiro Matsumoto",
    },
  ];
//   console.log(programmingLanguages.map((a[0])=>a))
// programmingLanguages.forEach(a=>console.log(a.name))
// console.log(programmingLanguages.length)
// console.log(programmingLanguages.filter((data=>data.popular==true)))
// console.log(programmingLanguages.filter(data=>data.yearCreated>=2000))
// console.log(programmingLanguages.filter((key=>key.paradigms.filter(item=>(item=="Object-oriented")&&(item=="Functional")))))

// console.log(programmingLanguages.filter(key=>key.paradigms[1]=='Object-oriented'&& key.paradigms[2]=='Functional'))
// console.log(programmingLanguages.map(key=>key.creator))
console.log(programmingLanguages.filter(item=>item.name.slice(4,10) == 'Script'))
console.log(programmingLanguages.filter(item=>item.name.includes('Script')))

