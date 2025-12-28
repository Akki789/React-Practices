import React from "react";

export default function TernaryOperator() {
  return (
    <div>
      <Greeting name="Akash" age={22} />
      <UserCard name="Faizan" age={23} place="Pune" />
      <Active isActive={false} />
      <Numbers nums={[10, 20, 30, 40]} />
      <User info={{ name: "Akash", age: 22, place: "Pune" }} />

      <h2>Task 1</h2>
      <Button text="Login" color="Green" />
      <Button text="SignUp" color="blue" />
      <Button text="Logput" color="red" />

      <h2>Task 2</h2>
      <ProductCard title="iphone 15" price={150} inStock={true} />

      <ProductCard title="Samsung" price={120} inStock={false} />

      <ProductCard title="Realme" price={100} inStock={true} />

      <UserProfile
        user={{
          name: "Vedant",
          age: 24,
          email: "vedant@gmail.com",
          skills: ["Html", "css", "js"],
        }}
      />
    </div>
  );
}

function Greeting({ name,age }) {
  return (
    <h2>
      Hello, {name}, Age : {age}
    </h2>
  );
}

function UserCard({ name, age, place }) {
  return (
    <div>
      <p>{name}</p>
      <p>Age:{age}</p>
      <p>Place:{place}</p>
    </div>
  );
}

function Active({ isActive }) {
  return (
    <div>
      {isActive ? <h2>You are Active</h2> : <h2>You are not Active</h2>}
    </div>
  );
}

function Numbers({ nums }) {
  return (
    <div>
      {nums.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </div>
  );
}

function User({ info }) {
  return (
    <div>
      <p>{info.name}</p>
      <p>{info.age}</p>
      <p>{info.place}</p>
    </div>
  );
}

function Button({ text, color }) {
  return <button style={{ background: color }}>{text}</button>;
}

function ProductCard({ title, price, inStock }) {
  return (
    <div className = "card">
      <p>{title}</p>
      <p>{price}</p>
      {inStock ? (<span style={{color:"green"}}>In Stock</span>) : (<span style={{color: "red"}}>Out Of Stock</span>)}
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <h3>Skills:</h3>
      <ul>
        {user.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
}
