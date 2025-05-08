<h1>Interview Questions - Blog Task</h1>

<h2>3. Explain the difference between any, unknown, and never types in TypeScript.</h2>

<p><strong>any</strong> = If I want the variable to be any type (disables type checking)</p>
<p><em>Use <code>any</code> When its's okay with completely ignoring type safety.</em></p>

<pre><code>let data: any = 5;
data = "hello";
data = true;
</code></pre>

<p><strong>unknown</strong> = Use this when the type is unknown at first but will be determined through type checking.</p>
<p><em>Use <code>unknown</code> When it's unsure of the type but want to keep type safety.</em></p>

<pre><code>let data: unknown = "hello";
// console.log(data.toUpperCase()); ❌ Error

if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ Safe usage
}
</code></pre>

<p><strong>never</strong> = If I don't want anything in return or the function never finishes</p>
<p><em>Use <code>never</code> for functions that never return a value, either due to errors or infinite loops.</em></p>

<pre><code>function throwError(): never {
  throw new Error("Something went wrong");
}
</code></pre>

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>any</code></td>
      <td>Bypasses type safety; can be assigned any value without restrictions.</td>
    </tr>
    <tr>
      <td><code>unknown</code></td>
      <td>Enforces type checks before usage; safer alternative to <code>any</code>.</td>
    </tr>
    <tr>
      <td><code>never</code></td>
      <td>Used for unreachable code or functions that never return (e.g., throw errors or run infinitely).</td>
    </tr>
  </tbody>
</table>


<hr/>

<h2>7. Provide an example of using union and intersection types in TypeScript.</h2>

<p><strong>Union</strong> denoted by <code>|</code></p>

<pre><code>function printId(id: string | number) {
  console.log("Your ID is: " + id);
}

printId(22489833);       // ✅ number
printId("22489833");  // ✅ string
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
