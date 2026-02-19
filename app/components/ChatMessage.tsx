import type { UIMessage } from 'ai';
import MarkdoownPreview from '@uiw/react-markdown-preview'
export default function ChatMessage({ message }: { message: UIMessage }) {
  const isUser = message.role === 'user';
  const text = message.parts
    .filter((p): p is Extract<typeof p, { type: 'text' }> => p.type === 'text')
    .map(p => p.text)
    .join('');

    console.log("user prompt gets processed ")

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'bg-foreground text-background rounded-br-md'
            : 'bg-zinc-100 dark:bg-zinc-800 rounded-bl-md'
        }`}
      >
            <MarkdoownPreview source={text}
style={{padding:16}} />
     </div>
    </div>
  );
}
