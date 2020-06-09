/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *Repository提供数据库操作，如果要增加数据库操作请在当前目录下Partial文件夹PictureRepository编写代码
 */
using VOL.Order.IRepositories;
using VOL.Core.BaseProvider;
using VOL.Core.EFDbContext;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace VOL.Order.Repositories
{
    public partial class PictureRepository : RepositoryBase<Picture> , IPictureRepository
    {
    public PictureRepository(VOLContext dbContext)
    : base(dbContext)
    {

    }
    public static IPictureRepository Instance
    {
      get {  return AutofacContainerModule.GetService<IPictureRepository>(); } }
    }
}
