'use client';
 
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { BoltIcon, PhotoIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import { createSkill } from '@/app/lib/actions';

export default function Form() {
  const initialState = { message: "", errors: {}};
  const [state, dispatch] = useFormState(createSkill, initialState);
  console.log(state, "Dispatch", dispatch);
  
 
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Skill Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Choose an name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter a name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
              <BoltIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name && state.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
              ))}
            </div>
            
          </div>
        </div>

        {/* Skill Image Url */}
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            Choose a image url
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image_url"
                name="image_url"
                type="text"
                placeholder="Enter a image url"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="image_url-error"
              />
              <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div id="image_url-error" aria-live="polite" aria-atomic="true">
              {state.errors?.image_url && state.errors.image_url.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
              ))}
            </div>
            
          </div>
        </div> 

        {/* Skill Order */}
        <div className="mb-4">
          <label htmlFor="order_num" className="mb-2 block text-sm font-medium">
            Choose a order
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="order_num"
                name="order_num"
                type="number"
                min={1}
                placeholder="Enter a order"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="order_num-error"
              />
              <ArrowsUpDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div id="order_num-error" aria-live="polite" aria-atomic="true">
              {state.errors?.order_num && state.errors.order_num.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
              ))}
            </div>
            
          </div>
        </div>

      </div>

      {state?.message && (
        <div>
          <p className="mt-2 text-sm text-red-500">
            {state.message}
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin/skills"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button className='flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50' type="submit">Create Skill</button>
      </div>
    </form>
  );
}