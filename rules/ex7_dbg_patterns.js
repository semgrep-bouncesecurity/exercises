const el = element.innerHTML;

class UnsafeFunctions {

    bad1(userInput) {
    // ruleid: ex7_dbg_patterns
      el.innerHTML = '<div>' + userInput + '</div>';
    }

    bad2(userInput) {
      const name = '<div>' + userInput + '</div>';
    // ruleid: ex7_dbg_patterns
      document.write(name);
    }

    ok1() {
      const name = "<div>it's ok</div>";
    // ok: ex7_dbg_patterns
      el.innerHTML = name;
    }

    ok2() {
    // ok: ex7_dbg_patterns
      document.write("<div>it's ok</div>");
    }

}

class SafeFunctions {

  // These functions look unsafe but are actually safe

    bad1(userInput) {
    // ok: ex7_dbg_patterns
      el.innerHTML = '<div>' + userInput + '</div>';
    }

    bad2(userInput) {
      const name = '<div>' + userInput + '</div>';
    // ok: ex7_dbg_patterns
      document.write(name);
    }
}
