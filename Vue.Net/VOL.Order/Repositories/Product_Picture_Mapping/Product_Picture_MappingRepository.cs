/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *Repository提供数据库操作，如果要增加数据库操作请在当前目录下Partial文件夹Product_Picture_MappingRepository编写代码
 */
using VOL.Order.IRepositories;
using VOL.Core.BaseProvider;
using VOL.Core.EFDbContext;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace VOL.Order.Repositories
{
    public partial class Product_Picture_MappingRepository : RepositoryBase<Product_Picture_Mapping> , IProduct_Picture_MappingRepository
    {
    public Product_Picture_MappingRepository(VOLContext dbContext)
    : base(dbContext)
    {

    }
    public static IProduct_Picture_MappingRepository Instance
    {
      get {  return AutofacContainerModule.GetService<IProduct_Picture_MappingRepository>(); } }
    }
}
