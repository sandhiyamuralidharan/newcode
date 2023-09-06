import { useState } from 'react';
import React from 'react';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <div class="row-sm">
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
    </div>
  )
}
