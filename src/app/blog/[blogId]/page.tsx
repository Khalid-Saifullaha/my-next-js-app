const DynamicBlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-2xl">Dynamic Blog Page BlogId: {blogId}</h1>
    </div>
  );
};

export default DynamicBlogPage;
