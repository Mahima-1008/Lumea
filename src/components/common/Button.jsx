export default function Button({
  as: Tag = 'button', variant = 'primary', className = '', children, ...props
}) {
  const styles = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };
  return (
    <Tag className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
