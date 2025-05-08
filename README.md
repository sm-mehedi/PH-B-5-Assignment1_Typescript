<h1>Interview Questions - Blog Task</h1>

<h2>3. Explain the difference between any, unknown, and never types in TypeScript.</h2>

<p><strong>any</strong> = if I want the variable to be any type (disables type checking)</p>

<pre><code>let data: any = 5;
data = "hello";
data = true;
</code></pre>

<p><strong>unknown</strong> = if I don't know the type but it will be assigned after code checks</p>

<pre><code>let data: unknown = "hello";
// console.log(data.toUpperCase()); ❌ Error

if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ Safe usage
}
</code></pre>

<p><strong>never</strong> = if I don't want anything in return or the function never finishes</p>

<pre><code>function throwError(): never {
  throw new Error("Something went wrong");
}
</code></pre>

<hr/>

<h2>7. Provide an example of using union and intersection types in TypeScript.</h2>

<p><strong>Union</strong> denoted by <code>|</code></p>

<pre><code>function printId(id: string | number) {
  console.log("Your ID is: " + id);
}

printId(101);       // ✅ number
printId("abc123");  // ✅ string
</code></pre>

<p><strong>Intersection Type</strong> denoted by <code>&</code></p>

<pre><code>type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staff_Member: Staff = {
  name: "S. M MEHEDI HASAN",
  employeeId: 22489833
};
</code></pre>
