class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = new Node(null, null);
        this.size = 0;
    }

    push(value) {
        var inNode = new Node(value, this.top);
        this.top = inNode;
        this.size++;
    }

    peek() {
        if (this.size > 0) {
            return this.top.value;
        } else {
            throw "Stack Underflow";
        }

    }

    pop() {

        if (this.size > 0) {
            var retVal = this.top.value;
            this.top = this.top.next;
            this.size--;
            return retVal;
        } else {
            throw "Stack Underflow";
        }
    }

    isEmpty() {
        return this.size == 0;
    }

    print() {
        var holder = this.top;

        while (holder.next != null) {
            console.log(holder.value);
            holder = holder.next;
        }
    }
}


s.push(1);
s.push(2);
s.push(3);
s.print();
console.log(s.peek());
s.pop();

console.log("First Pop");
s.print();
s.pop();
console.log("Second Pop");
s.print();
s.pop();
console.log("Third Pop");
s.print();



<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<RootLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected routes should be defined inside the Home route */}
            <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/addpost" element={<AddPost />} />
                <Route path="/allusers" element={<AllUsers />} />
            </Route>
        </Route>
    </Routes>
</BrowserRouter>