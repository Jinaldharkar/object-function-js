// includes() → Does this value exist?

let permissions = ["read","write", "delete" ];

let canDelete = permissions.includes("delete");

console.log(canDelete);