import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/mode/python/python'
import { Controlled } from 'react-codemirror2'

export default function Editor({value, onChange}) {
  
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
      <Controlled 
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lineNumbers: true,
          mode: 'python',
          theme: 'darcula',
          lint: true,
        }}
      />
  )
}
