// components/ui/progress.tsx

const Progress = ({ value = 0, className = "", color = "bg-blue-500" }) => (
  <div className={`w-full bg-gray-400 rounded-full ${className}`}>
    <div
      className={`h-full ${color} rounded-full transition-all duration-300`}
      style={{ width: `${value}%` }}
    />
  </div>
);


export default Progress