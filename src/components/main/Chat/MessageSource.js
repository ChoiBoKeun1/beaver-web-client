function MessageSource({ message }) {
  return (
    <div className="bg-white/70 text-black/80 rounded w-11/12 mt-2">
      <div className="bg-gray-50/50 w-auto h-6 pl-1 my-2 font-bold">Source</div>
      {message.input && (
        <div className="border m-1 rounded">
          <div className="bg-gray-50/50 pl-1 my-2 text-green-600">input</div>
          <pre className="pl-4">{message.input}</pre>
        </div>
      )}
      {message.output && (
        <div className="border m-1 rounded">
          <div className="bg-gray-50/50 pl-1 my-2 text-blue-600">output</div>
          <pre className="pl-4">{message.output}</pre>
        </div>
      )}
    </div>
  );
}
export default MessageSource;
