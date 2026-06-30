function outer() {
  let college = "TCE";

  function inner() {
    let dept = "Data Science";
    console.log(college);  // ?
    console.log(dept);     // ?
  }

  
  inner();      // ?
}

outer();