import { IconButton } from '@material-tailwind/react';

export default function DropboxImage() {
  return (
    <div className="w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md relative">
      <div>
        <img
          src="/images/dachshund.webp"
          alt="닥스훈트"
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      <div>dachshund.webp</div>

      <div className="absolute top-4 right-4 rounded-full">
        <IconButton onClick={() => {}} color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
