const ContactTriangle = ({ className, orientation = 'vertical' }: { className?: string, orientation?: 'vertical' | 'horizontal' }) => 
  orientation === 'horizontal' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 778 86"
      className={className}
    >
      <path fill="currentColor" d="M0 0v86.026h778V.246l-388.441 85.78L0 0Z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={87}
      preserveAspectRatio="none"
      viewBox="0 0 87 778"
      className={className}
    >
      <path fill="currentColor" d="M86.026 0H0v778h85.779L0 389.559 86.026 0Z" />
    </svg>
  )
export default ContactTriangle