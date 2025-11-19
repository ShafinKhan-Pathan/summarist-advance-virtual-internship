export interface Props {
  onSubscriptionPage?: boolean;
}
const Divider = ({ onSubscriptionPage }: Props) => {
  return (
    <span
      className={`inline-flex items-center w-full ${
        onSubscriptionPage ? "md:max-w-[20%]" : ""
      } gap-3 my-4
           before:content-[''] before:block before:h-px before:bg-gray-300 before:flex-1
           after:content-['']  after:block  after:h-px  after:bg-gray-300  after:flex-1
           text-gray-500 text-sm`}
    >
      or
    </span>
  );
};

export default Divider;
