"use client"

import { useState } from "react"
import { Edit2, Check, X } from "lucide-react"

interface CodeEditorProps {
  code: string
  language: "html" | "css"
  onSave: (newCode: string) => void
}

export function CodeEditor({ code, language, onSave }: CodeEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedCode, setEditedCode] = useState(code)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onSave(editedCode)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedCode(code)
    setIsEditing(false)
  }

  return (
    <div className="relative">
      {isEditing ? (
        <>
          <textarea
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
            className="w-full h-64 p-2 font-mono text-sm bg-gray-800 text-white border border-gray-700 rounded"
          />
          <div className="absolute top-2 right-2 space-x-2">
            <button onClick={handleSave} className="p-1 bg-green-500 text-white rounded">
              <Check size={16} />
            </button>
            <button onClick={handleCancel} className="p-1 bg-red-500 text-white rounded">
              <X size={16} />
            </button>
          </div>
        </>
      ) : (
        <>
          <pre className="p-4 bg-gray-800 text-white rounded overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
          </pre>
          <button onClick={handleEdit} className="absolute top-2 right-2 p-1 bg-blue-500 text-white rounded">
            <Edit2 size={16} />
          </button>
        </>
      )}
    </div>
  )
}

