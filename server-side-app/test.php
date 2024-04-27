<?
namespace App\Repositories\Implementations;

use App\Http\Requests\ArticleRequest;
use App\Models\Article;
use App\Repositories\Interfaces\ArticleInterface;
use App\Traits\ImageUpload;
use Illuminate\Http\Request;

class ArticleRepository implements ArticleInterface
{
    use ImageUpload;
    public function all()
    {
        return Article::paginate(3);
    }
    public function store(ArticleRequest $request)
    {
        $articleData = $request->all();
        $article = Article::create($articleData);
        if ($request->hasfile('image')) {
            $this->storeImg($request->file('image'), $article);
        }
    }

    public function show(Article $article)
    {
        // dd($article->id);
        return $article;
    }
    public function update(ArticleRequest $request, Article $article)
    {
        $articleData = $request->all();
        if ($request->hasFile('image')) {
            $this->storeImg($request->file('image'), $article);
            $this->updateImg($request->file('image'), $article);
        }
     $article->update($articleData);


    }
    public function delete(Article $article)
    {
        return $article->delete();
    }

    public function search(Request $request)

    {
        $query = $request->input('search');
        $articles = Article::with('image','user')->where('title', 'like', '%'.$query.'%')->get();
        // dd($articles);
        return response()->json($articles);
    }
}